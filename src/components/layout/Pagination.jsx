import React from "react";

const Pagination = ({ sections, activeSection, onNavigate }) => {
  const handlePrevious = () => {
    if (activeSection > 1) {
      onNavigate(activeSection - 1);
    }
  };

  const handleNext = () => {
    if (activeSection < sections.length) {
      onNavigate(activeSection + 1);
    }
  };

  return (
  <div className="mt-8 slide-up stagger-4">
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center justify-between gap-3">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={activeSection === 1}
          className={`nav-item px-4 py-4 rounded-xl text-sm font-medium flex items-center gap-2 transition-all flex-1 min-h-[56px] ${
            activeSection === 1
              ? "bg-slate-100 text-slate-400 cursor-not-allowed"
              : "bg-white/50 hover:bg-white text-slate-600 hover:shadow-lg active:scale-95"
          }`}
        >
          <span className="text-xl">&larr;</span>
          {activeSection > 1 ? (
            <div className="flex flex-col items-start min-w-0">
              <span className="text-xs text-slate-400">ก่อนหน้า</span>
              <span className="flex items-center gap-1.5">
                <span className="text-base">
                  {sections[activeSection - 2]?.icon}
                </span>
                <span className="truncate text-sm">
                  {sections[activeSection - 2]?.title}
                </span>
              </span>
            </div>
          ) : (
            <span className="text-slate-400">ก่อนหน้า</span>
          )}
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={activeSection === sections.length}
          className={`nav-item px-4 py-4 rounded-xl text-sm font-medium flex items-center gap-2 transition-all flex-1 min-h-[56px] justify-end ${
            activeSection === sections.length
              ? "bg-slate-100 text-slate-400 cursor-not-allowed"
              : "bg-white/50 hover:bg-white text-slate-600 hover:shadow-lg active:scale-95"
          }`}
        >
          {activeSection < sections.length ? (
            <div className="flex flex-col items-end min-w-0">
              <span className="text-xs text-slate-400">ถัดไป</span>
              <span className="flex items-center gap-1.5">
                <span className="truncate text-sm">
                  {sections[activeSection]?.title}
                </span>
                <span className="text-base">
                  {sections[activeSection]?.icon}
                </span>
              </span>
            </div>
          ) : (
            <span className="text-slate-400">ถัดไป</span>
          )}
          <span className="text-xl">&rarr;</span>
        </button>
      </div>
    </div>
  </div>
  );
};

export default Pagination;
