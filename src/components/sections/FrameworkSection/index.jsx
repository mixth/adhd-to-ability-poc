import React, { useState } from "react";
import TwoPillarsStrategy from "./TwoPillarsStrategy";
import LiquidBlobs from "./LiquidBlobs";
import FlowchartDiagram from "./FlowchartDiagram";
import PolicyOverlay from "./PolicyOverlay";
import Partners from "./Partners";

const FrameworkSection = ({ onOpenFullFramework }) => {
  const [activeFramework, setActiveFramework] = useState(null);
  const [showDetails, setShowDetails] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayAnimating, setOverlayAnimating] = useState(false);

  const openOverlay = (detail) => {
    setShowDetails(detail);
    setOverlayVisible(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOverlayAnimating(true);
      });
    });
  };

  const closeOverlay = () => {
    setOverlayAnimating(false);
    setTimeout(() => {
      setOverlayVisible(false);
      setShowDetails(null);
    }, 300);
  };

  return (
    <section className="slide-up space-y-6">
      <div className="glass rounded-3xl p-6 md:p-8 section-card">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🔄</span>
          <h2 className="text-2xl font-bold text-slate-800">
            กรอบแนวคิดในการขับเคลื่อนนโยบาย
          </h2>
        </div>

        <TwoPillarsStrategy
          activeFramework={activeFramework}
          setActiveFramework={setActiveFramework}
        />

        {/* Flowchart Visual - Liquid Glass iOS 26 Style */}
        <div className="relative rounded-3xl p-8 md:p-12 min-h-[500px]">
          {/* Liquid Glass Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100/80 via-white/60 to-blue-50/80"></div>

          <LiquidBlobs />

          {/* Glass overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>

          <FlowchartDiagram openOverlay={openOverlay} />

          {overlayVisible && (
            <PolicyOverlay
              showDetails={showDetails}
              overlayAnimating={overlayAnimating}
              closeOverlay={closeOverlay}
            />
          )}
        </div>

        <Partners />

        {/* Full Framework Link */}
        <div className="mt-6">
          <button
            onClick={onOpenFullFramework}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-2xl font-medium text-white transition-all flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl"
          >
            <span className="text-2xl">🔍</span>
            <span className="text-lg">ดูกรอบแนวคิดฉบับเต็ม</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
