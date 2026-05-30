import { useEffect, useState } from "react";
import Icon from "../../../utils/Icon";
import TwoPillarsStrategy from "./TwoPillarsStrategy";
import FlowchartDiagram from "./FlowchartDiagram";
import Partners from "./Partners";
import PolicyOverlay from "./PolicyOverlay";

const PROBLEMS = [
  { icon: "pill", text: "ความไม่เท่าเทียมในการเข้าถึงยาที่มีประสิทธิภาพ" },
  { icon: "tag", text: "ตราบาปทางสังคมที่ทำให้ผู้ปกครองปฏิเสธการรักษา" },
];

const FrameworkSection = () => {
  const [activePillar, setActivePillar] = useState(null);
  const [overlayId, setOverlayId] = useState(null);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setOverlayId(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <section>
      <div className="card-default">
        <div className="section-head">
          <div className="head-icon">
            <Icon name="git-branch" />
          </div>
          <h2>กรอบแนวคิดในการขับเคลื่อนนโยบาย</h2>
        </div>

        <div className="fw-section-title">ประเด็นปัญหาที่ต้องการขับเคลื่อน</div>
        <div className="problem-grid">
          {PROBLEMS.map((p) => (
            <div className="problem-card" key={p.text}>
              <div className="pc-icon">
                <Icon name={p.icon} />
              </div>
              <p>{p.text}</p>
            </div>
          ))}
        </div>

        <div className="fw-section-title">กลยุทธ์ 2 เสาหลัก</div>
        <TwoPillarsStrategy
          activePillar={activePillar}
          onTogglePillar={setActivePillar}
        />

        <FlowchartDiagram onOpenOverlay={setOverlayId} />

        {/* <Partners />*/}
      </div>

      {overlayId && (
        <PolicyOverlay id={overlayId} onClose={() => setOverlayId(null)} />
      )}
    </section>
  );
};

export default FrameworkSection;
