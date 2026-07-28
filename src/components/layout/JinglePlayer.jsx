import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "../../utils/Icon";

const SRC = `${import.meta.env.BASE_URL}assets/audio/jingle.mp3`;

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

  const [playing, setPlaying] = useState(false);
  // Autoplay was refused and we're waiting for a gesture — nudge the button.
  const [waiting, setWaiting] = useState(false);

  const fadeTo = useCallback((target, ms, onDone) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeRef.current) clearInterval(fadeRef.current);

    const from = audio.volume;
    const steps = Math.max(1, Math.round(ms / 40));
    let step = 0;

    fadeRef.current = setInterval(() => {
      step += 1;
      const v = from + (target - from) * (step / steps);
      audio.volume = Math.min(1, Math.max(0, v));
      if (step >= steps) {
        clearInterval(fadeRef.current);
        fadeRef.current = null;
        onDone?.();
      }
    }, 40);
  }, []);

  // Resolves false when the browser blocks playback, so callers can fall
  // back to waiting for a gesture instead of showing a wrong "playing" state.
  const start = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return false;
    audio.volume = 0;
    try {
      await audio.play();
    } catch {
      return false;
    }
    fadeTo(TARGET_VOLUME, FADE_IN_MS);
    return true;
  }, [fadeTo]);

  const stop = useCallback(() => {
    fadeTo(0, FADE_OUT_MS, () => audioRef.current?.pause());
  }, [fadeTo]);

  // Try to autoplay on arrival; if the browser says no, play on the first
  // real interaction instead — unless the visitor already opted out.
  useEffect(() => {
    if (readPref() === "off") return undefined;

    let cancelled = false;
    let detach = () => {};

    const onGesture = () => {
      start().then((ok) => {
        if (!ok || cancelled) return;
        detach();
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
        setPlaying(true);
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

  // Don't sing to an empty room: hush while the tab is in the background.
  useEffect(() => {
    if (!playing) return undefined;
    const onVisibility = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (document.hidden) audio.pause();
      else audio.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [playing]);

  useEffect(() => () => clearInterval(fadeRef.current), []);

  const toggle = async () => {
    if (playing) {
      stop();
      setPlaying(false);
      setWaiting(false);
      writePref("off");
      return;
    }
    const ok = await start();
    setPlaying(ok);
    setWaiting(!ok);
    writePref("on");
  };

  const label = playing ? "ปิดเพลง" : "เปิดเพลง";

  return (
    <>
      <audio ref={audioRef} src={SRC} loop preload="auto" playsInline />
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
    </>
  );
};

export default JinglePlayer;
