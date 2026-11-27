import { Sparkles } from "lucide-react";

const STARS = [
  { top: "6%",  left: "14%", size: 18, delay: 0,    dur: 12 },
  { top: "12%", left: "78%", size: 14, delay: 3,    dur: 15 },
  { top: "28%", left: "44%", size: 12, delay: 6,    dur: 11 },
  { top: "38%", left: "8%",  size: 16, delay: 1.5,  dur: 13 },
  { top: "44%", left: "88%", size: 20, delay: 4.5,  dur: 17 },
  { top: "62%", left: "30%", size: 14, delay: 2,    dur: 14 },
  { top: "70%", left: "72%", size: 12, delay: 5.5,  dur: 12 },
  { top: "84%", left: "20%", size: 18, delay: 3.5,  dur: 16 },
  { top: "90%", left: "60%", size: 14, delay: 0.5,  dur: 13 },
  { top: "4%",  left: "50%", size: 12, delay: 2.5,  dur: 14 },
  { top: "18%", left: "28%", size: 16, delay: 5,    dur: 13 },
  { top: "22%", left: "62%", size: 14, delay: 1,    dur: 11 },
  { top: "32%", left: "92%", size: 12, delay: 4,    dur: 15 },
  { top: "48%", left: "18%", size: 18, delay: 6.5,  dur: 12 },
  { top: "54%", left: "54%", size: 14, delay: 0.8,  dur: 16 },
  { top: "66%", left: "6%",  size: 12, delay: 3.2,  dur: 14 },
  { top: "76%", left: "38%", size: 16, delay: 5.8,  dur: 13 },
  { top: "80%", left: "90%", size: 14, delay: 2.2,  dur: 15 },
];

const PageBackground = () => (
  <div className="page-bg">
    <div className="page-bg-stars" aria-hidden="true">
      {STARS.map((s, i) => (
        <Sparkles
          key={i}
          className="bg-star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  </div>
);

export default PageBackground;
