import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Cake,
  Check,
  CircleCheck,
  Compass,
  FileText,
  RotateCcw,
  Share2,
  Sprout,
  Star,
  X,
} from "lucide-react";

import { QUIZ, RESULT_TIERS, tierFor } from "../../data/quiz";
import useCopyLink from "../../utils/useCopyLink";

const TOTAL = QUIZ.length;

// Renders children into document.body once mounted (nothing during SSR).
const Overlay = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? createPortal(children, document.body) : null;
};

const TrueFalseChip = ({ isTrue, small }) =>
  isTrue ? (
    <span className={"fx-chip fx-chip-purple" + (small ? " sm" : "")}>
      {!small && <CircleCheck aria-hidden="true" />}
      {small ? "จริง" : "คำตอบ: จริง"}
    </span>
  ) : (
    <span className={"fx-chip fx-chip-gold" + (small ? " sm" : "")}>
      {!small && <Cake aria-hidden="true" />}
      {small ? "เค้ก" : "คำตอบ: เค้ก"}
    </span>
  );

/* ---------------------------------------------------------- result card */
export const ResultTier = ({ score, total }) => {
  const tier = tierFor(score, total);
  const t = RESULT_TIERS[tier];
  const TierIcon = tier === "high" ? Star : tier === "mid" ? Compass : Sprout;
  return (
    <div className="fx-result-card">
      <span className={"fx-tier-chip tier-" + tier}>
        <TierIcon aria-hidden="true" />
        {t.chip}
      </span>
      <span className="fx-eyebrow">คะแนนของคุณ</span>
      <div className="fx-score">
        {score}/{total}
      </div>
      <h2>{t.title}</h2>
      <p>{t.body}</p>
    </div>
  );
};

/* -------------------------------------------------------- answer drawer */
const AnswerDrawer = ({ answers, score, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <>
      <button type="button" className="fx-scrim" onClick={onClose} aria-label="ปิดเฉลย" />
      <aside className="fx-drawer" role="dialog" aria-modal="true" aria-label="เฉลย จริง หรือ เค้ก ทั้ง 10 ข้อ">
        <div className="fx-drawer-head">
          <div>
            <span className="fx-eyebrow">จริง หรือ เค้ก?</span>
            <h2>เฉลยทั้ง {TOTAL} ข้อ</h2>
            <span className="fx-muted">
              คุณตอบถูก {score} จาก {TOTAL} ข้อ
            </span>
          </div>
          <button type="button" ref={closeRef} className="fx-icon-btn" onClick={onClose} aria-label="ปิด">
            <X aria-hidden="true" />
          </button>
        </div>
        <div className="fx-drawer-body">
          {QUIZ.map((q, i) => {
            const ok = answers[i] === q.a;
            return (
              <div className="fx-drawer-item" key={i}>
                <div className="fx-drawer-item-top">
                  <span className="fx-num">{i + 1}</span>
                  <TrueFalseChip isTrue={q.a} small />
                  <span className="fx-grow" />
                  <span className={ok ? "fx-ok" : "fx-miss"}>{ok ? "คุณตอบถูก" : "คุณตอบผิด"}</span>
                </div>
                <p className="fx-drawer-q">“{q.s}”</p>
                <p className="fx-drawer-fact">{q.fact}</p>
                <p className="fx-src">ที่มา: {q.src}</p>
              </div>
            );
          })}
        </div>
        <div className="fx-drawer-foot">
          <Link to="/policy-brief" className="fx-btn fx-btn-purple fx-btn-block">
            อ่านข้อเสนอนโยบาย <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </aside>
    </>
  );
};

/* ------------------------------------------------------------ the quiz */
const QuizPage = () => {
  const [screen, setScreen] = useState("intro"); // intro | question | result
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { copied, share } = useCopyLink();
  const topRef = useRef(null);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const q = QUIZ[idx];
  const revealed = answers.length > idx;
  const picked = answers[idx];
  const isCorrect = revealed && picked === q.a;
  const score = answers.filter((v, i) => QUIZ[i] && v === QUIZ[i].a).length;
  const progress = ((idx + (revealed ? 1 : 0)) / TOTAL) * 100;

  const scrollTop = () =>
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const start = () => {
    setAnswers([]);
    setIdx(0);
    setDrawerOpen(false);
    setScreen("question");
    scrollTop();
  };
  const pick = (v) => {
    if (revealed) return;
    setAnswers(answers.slice(0, idx).concat([v]));
  };
  const next = () => {
    if (idx < TOTAL - 1) setIdx(idx + 1);
    else setScreen("result");
    scrollTop();
  };

  return (
    <section className="fx-quiz" ref={topRef}>
      {screen === "intro" && (
        <div className="fx-quiz-card fx-quiz-intro">
          <span className="eyebrow-pill fx-pill-sm">
            <FileText aria-hidden="true" /> ทดสอบความรู้เท่าทัน ADHD
          </span>
          <h1 className="fx-gradient-text fx-quiz-title">จริง หรือ เค้ก?</h1>
          <p className="fx-lead">ความเชื่อเรื่อง ADHD 10 ข้อ ข้อไหนจริง ข้อไหนไม่จริง มาลองทายกันดู!</p>
          <div className="fx-tf-grid">
            <div className="fx-tf fx-tf-purple">
              <CircleCheck aria-hidden="true" />
              <strong>จริง</strong>
              <span>มีหลักฐานรองรับ</span>
            </div>
            <div className="fx-tf fx-tf-gold">
              <Cake aria-hidden="true" />
              <strong>เค้ก</strong>
              <span>ความเชื่อที่ไม่จริง</span>
            </div>
          </div>
          <button type="button" className="fx-btn fx-btn-gold fx-btn-lg fx-btn-block" onClick={start}>
            เริ่มเล่น <ArrowRight aria-hidden="true" />
          </button>
        </div>
      )}

      {screen === "question" && (
        <div className="fx-quiz-card">
          <div className="fx-progress-head">
            <span>
              ข้อ {idx + 1} จาก {TOTAL}
            </span>
            <span className="fx-muted">จริง หรือ เค้ก?</span>
          </div>
          <div
            className="fx-progress"
            role="progressbar"
            aria-label="ความคืบหน้า"
            aria-valuemin={0}
            aria-valuemax={TOTAL}
            aria-valuenow={idx + 1}
          >
            <div style={{ width: `${progress}%` }} />
          </div>

          <div className="fx-question">
            <span className="fx-eyebrow">ความเชื่อข้อที่ {idx + 1}</span>
            <p>“{q.s}”</p>
          </div>

          {!revealed ? (
            <div className="fx-tf-grid">
              <button type="button" className="fx-tf fx-tf-purple fx-tf-btn" onClick={() => pick(true)}>
                <CircleCheck aria-hidden="true" />
                <strong>จริง</strong>
              </button>
              <button type="button" className="fx-tf fx-tf-gold fx-tf-btn" onClick={() => pick(false)}>
                <Cake aria-hidden="true" />
                <strong>เค้ก</strong>
              </button>
            </div>
          ) : (
            <div className="fx-reveal">
              <div role="status" className={"fx-verdict " + (isCorrect ? "ok" : "miss")}>
                {isCorrect ? <Check aria-hidden="true" /> : <X aria-hidden="true" />}
                {isCorrect ? "ถูกต้อง! คุณรู้ทันข้อนี้" : "ยังไม่ใช่ หลายคนยังเชื่อแบบนี้อยู่"}
              </div>
              <div className="fx-fact">
                <div className="fx-fact-head">
                  <span>ความจริงคือ</span>
                  <TrueFalseChip isTrue={q.a} />
                </div>
                <p>{q.fact}</p>
                <p className="fx-src">ที่มา: {q.src}</p>
                {q.link && (
                  <Link to={q.href} className="fx-text-link">
                    {q.link} <ArrowRight aria-hidden="true" />
                  </Link>
                )}
              </div>
              <button type="button" className="fx-btn fx-btn-purple fx-btn-block" onClick={next}>
                {idx < TOTAL - 1 ? "ข้อถัดไป" : "ดูผลคะแนน"} <ArrowRight aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      )}

      {screen === "result" && (
        <div className="fx-quiz-card fx-quiz-result">
          <ResultTier score={score} total={TOTAL} />
          <Link to="/policy-brief" className="fx-btn fx-btn-gold fx-btn-lg fx-btn-block">
            อ่านข้อเสนอนโยบาย <ArrowRight aria-hidden="true" />
          </Link>
          <div className="fx-two-col">
            <button type="button" className="fx-btn fx-btn-ghost" onClick={start}>
              <RotateCcw aria-hidden="true" /> เล่นอีกครั้ง
            </button>
            <button
              type="button"
              className="fx-btn fx-btn-ghost"
              onClick={() => share("/quiz", { title: "จริง หรือ เค้ก? ควิซ ADHD", preferShare: true })}
            >
              {copied ? (
                <span className="fx-ok">
                  <Check aria-hidden="true" /> Link copied!
                </span>
              ) : (
                <>
                  <Share2 aria-hidden="true" /> ชวนเพื่อนเล่น
                </>
              )}
            </button>
          </div>
          <button type="button" className="fx-btn fx-btn-outline fx-btn-block" onClick={() => setDrawerOpen(true)}>
            <BookOpen aria-hidden="true" /> ดูเฉลยทั้ง {TOTAL} ข้อ
          </button>
        </div>
      )}

      {/* Overlays go to <body>: .screen-wrap's fade-in transform would
          otherwise trap position:fixed inside the page column. */}
      <Overlay>
      {screen === "result" && !drawerOpen && (
        <button
          type="button"
          className="fx-drawer-tab fx-shimmer"
          onClick={() => setDrawerOpen(true)}
          aria-label={`เปิดเฉลยทั้ง ${TOTAL} ข้อ`}
        >
          <BookOpen aria-hidden="true" />
          <strong>เฉลย</strong>
          <span>{TOTAL} ข้อ</span>
        </button>
      )}

      {screen === "result" && drawerOpen && (
        <AnswerDrawer answers={answers} score={score} onClose={closeDrawer} />
      )}

      {copied && (
        <div role="status" className="fx-toast">
          <Check aria-hidden="true" /> Link copied!
        </div>
      )}
      </Overlay>
    </section>
  );
};

export default QuizPage;
