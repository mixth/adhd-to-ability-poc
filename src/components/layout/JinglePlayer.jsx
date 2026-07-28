import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "../../utils/Icon";

const SRC = `${import.meta.env.BASE_URL}assets/audio/jingle.mp3`;
const LOGO = `${import.meta.env.BASE_URL}assets/logo-vertical-cropped.png`;

// Remembers the visitor's choice so a deliberate "off" survives navigation
// and return visits. Absent key = never chose = try to autoplay.
const PREF_KEY = "a2a:jingle";

const TARGET_VOLUME = 0.45;
const FADE_IN_MS = 900;
const FADE_OUT_MS = 320;

// Events that grant user activation in browsers that refuse bare autoplay.
// `scroll` deliberately omitted — it does not unlock audio anywhere.
const GESTURES = ["pointerdown", "keydown", "touchend", "click"];

const readPref = () => {
  try {
    return window.localStorage.getItem(PREF_KEY);
  } catch {
    return null; // private mode / storage blocked — behave like a first visit
  }
};

const writePref = (value) => {
  try {
    window.localStorage.setItem(PREF_KEY, value);
  } catch {
    /* nothing we can do, the session still works */
  }
};

const JinglePlayer = () => {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);

  const gateBtnRef = useRef(null);
  // The visitor wants sound. Read by listeners that outlive their render.
  const wantsRef = useRef(false);
  // We paused for a hidden tab and owe a resume when it comes back.
  const resumeRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  // Autoplay was refused and we're waiting for a gesture — nudge the button.
  const [waiting, setWaiting] = useState(false);
  // Welcome gate, shown only when autoplay was refused on an undecided visit.
  const [gate, setGate] = useState(false);

  const cancelFade = useCallback(() => {
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
    fadeRef.current = 0;
  }, []);

  const fadeTo = useCallback(
    (target, ms, onDone) => {
      const audio = audioRef.current;
      if (!audio) return;
      cancelFade();

      // A hidden tab freezes rAF, which would strand the volume partway
      // through a fade — and a stranded 0 is indistinguishable from broken.
      // Jump straight to the target instead.
      if (ms <= 0 || document.hidden) {
        audio.volume = target;
        onDone?.();
        return;
      }

      const from = audio.volume;
      const startedAt = performance.now();
      const step = (now) => {
        const k = Math.min(1, (now - startedAt) / ms);
        audio.volume = Math.min(1, Math.max(0, from + (target - from) * k));
        if (k < 1) {
          fadeRef.current = requestAnimationFrame(step);
          return;
        }
        fadeRef.current = 0;
        onDone?.();
      };
      fadeRef.current = requestAnimationFrame(step);
    },
    [cancelFade],
  );

  // Resolves false when the browser blocks playback, so callers can fall
  // back to waiting for a gesture instead of showing a wrong "playing" state.
  const start = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return false;
    cancelFade();
    audio.volume = 0;
    try {
      await audio.play();
    } catch {
      // Leave a sane volume behind. Otherwise the refused attempt strands
      // it at 0 and the next successful play() is silent for no reason.
      cancelFade();
      audio.volume = TARGET_VOLUME;
      return false;
    }
    fadeTo(TARGET_VOLUME, FADE_IN_MS);
    return true;
  }, [cancelFade, fadeTo]);

  const stop = useCallback(() => {
    fadeTo(0, FADE_OUT_MS, () => audioRef.current?.pause());
  }, [fadeTo]);

  // Safety net: whichever path got us here, audible playback must not run
  // at a volume the visitor can't hear. Covers a play() promise that
  // resolves late and a fade interrupted by a tab switch.
  const handlePlaying = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || fadeRef.current) return;
    if (audio.volume < TARGET_VOLUME) fadeTo(TARGET_VOLUME, FADE_IN_MS);
  }, [fadeTo]);

  // Leaves the gate and applies the visitor's answer. Their choice is
  // remembered, so the gate is a once-ever interruption at most.
  const enter = useCallback(
    async (withSound) => {
      setGate(false);
      if (!withSound) {
        writePref("off");
        return;
      }
      wantsRef.current = true;
      const ok = await start();
      setPlaying(ok);
      setWaiting(!ok);
      writePref("on");
    },
    [start],
  );

  // Try to autoplay on arrival. Browsers refuse audible autoplay until the
  // visitor has interacted with the page, and there is no way around that —
  // so when it's refused we make arriving *be* an interaction: a first-time
  // visitor gets a welcome gate whose single tap both enters the site and
  // unlocks the audio. Someone who already chose "on" is spared the gate and
  // simply resumes on their next tap anywhere.
  useEffect(() => {
    const pref = readPref();
    if (pref === "off") return undefined;

    let cancelled = false;
    let detach = () => {};

    // One tap fires several of these (pointerdown *and* click), so guard
    // against overlapping attempts fighting over the element's volume.
    let unlocking = false;
    const onGesture = () => {
      if (unlocking) return;
      unlocking = true;
      start().then((ok) => {
        unlocking = false;
        if (!ok || cancelled) return;
        detach();
        wantsRef.current = true;
        setPlaying(true);
        setWaiting(false);
      });
    };

    detach = () => {
      GESTURES.forEach((e) => window.removeEventListener(e, onGesture));
    };

    start().then((ok) => {
      if (cancelled) return;
      if (ok) {
        wantsRef.current = true;
        setPlaying(true);
        return;
      }
      if (pref === null) {
        setGate(true);
        return;
      }
      setWaiting(true);
      GESTURES.forEach((e) =>
        window.addEventListener(e, onGesture, { passive: true }),
      );
    });

    return () => {
      cancelled = true;
      detach();
    };
  }, [start]);

  // While the gate is up it owns the page: hold the scroll, take focus, and
  // treat Escape as "enter silently" so it can never trap anyone.
  useEffect(() => {
    if (!gate) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") enter(false);
    };
    const prevOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    gateBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [gate, enter]);

  // Don't sing to an empty room: hush while the tab is in the background.
  // This handler must never be able to *start* anything the visitor didn't
  // ask for, so it only resumes audio it paused itself and only while sound
  // is still wanted — both tracked in refs, since the listener outlives the
  // render that created it.
  useEffect(() => {
    const onVisibility = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        if (!audio.paused) {
          cancelFade();
          audio.volume = TARGET_VOLUME;
          resumeRef.current = true;
          audio.pause();
        }
        return;
      }

      if (!resumeRef.current || !wantsRef.current) return;
      resumeRef.current = false;
      audio.volume = TARGET_VOLUME;
      audio.play().catch(() => {});
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [cancelFade]);

  useEffect(() => cancelFade, [cancelFade]);

  const toggle = async () => {
    if (playing) {
      wantsRef.current = false;
      resumeRef.current = false;
      stop();
      setPlaying(false);
      setWaiting(false);
      writePref("off");
      return;
    }
    wantsRef.current = true;
    const ok = await start();
    setPlaying(ok);
    setWaiting(!ok);
    writePref("on");
  };

  const label = playing ? "ปิดเพลง" : "เปิดเพลง";

  return (
    <>
      <audio
        ref={audioRef}
        src={SRC}
        loop
        preload="auto"
        playsInline
        onPlaying={handlePlaying}
      />
      <button
        type="button"
        className={
          "jingle-toggle" +
          (playing ? " is-playing" : "") +
          (waiting ? " is-waiting" : "")
        }
        onClick={toggle}
        aria-label={label}
        aria-pressed={playing}
        title={label}
      >
        <span className="jingle-icon" aria-hidden="true">
          <Icon name={playing ? "volume-2" : "volume-x"} />
        </span>
        <span className="jingle-bars" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="jingle-label">{label}</span>
      </button>

      {gate && (
        <div
          className="jingle-gate"
          role="dialog"
          aria-modal="true"
          aria-labelledby="jingle-gate-title"
        >
          <div className="jingle-gate-backdrop" />
          <div className="jingle-gate-card">
            <img
              className="jingle-gate-logo"
              src={LOGO}
              alt="ADHD to Ability"
            />
            <h2 id="jingle-gate-title" className="jingle-gate-title">
              ยินดีต้อนรับ
            </h2>
            <p className="jingle-gate-copy">
              เว็บไซต์นี้มีเพลงประกอบ <br className="br-mobile" />
              ท่านสามารถเลือกได้ว่าอยากฟังไปด้วยหรือไม่
            </p>
            <div className="jingle-gate-actions">
              <button
                ref={gateBtnRef}
                type="button"
                className="jingle-gate-btn primary"
                onClick={() => enter(true)}
              >
                <Icon name="volume-2" />
                เข้าชมพร้อมเพลงประกอบ
              </button>
              <button
                type="button"
                className="jingle-gate-btn ghost"
                onClick={() => enter(false)}
              >
                <Icon name="volume-x" />
                เข้าชมแบบเงียบ
              </button>
            </div>
            <p className="jingle-gate-note">
              เปลี่ยนใจได้ตลอดเพียงกดที่ปุ่มมุมขวาล่าง
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default JinglePlayer;
