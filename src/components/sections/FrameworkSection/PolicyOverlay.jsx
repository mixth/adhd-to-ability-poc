import React from "react";
import { policyDetails } from "../../../data/policyDetails";

const PolicyOverlay = ({ showDetails, overlayAnimating, closeOverlay }) => (
  <div
    className="absolute inset-0 z-20 flex items-center justify-center p-4 rounded-3xl"
    onClick={closeOverlay}
  >
    {/* Backdrop */}
    <div
      className={`absolute inset-0 bg-white/80 overlay-backdrop ${
        overlayAnimating ? "overlay-backdrop-active" : "overlay-backdrop-enter"
      }`}
    />
    {/* Content */}
    <div
      className={`relative liquid-glass-card p-6 md:p-8 max-w-lg w-full shadow-2xl border border-slate-200 overlay-content ${
        overlayAnimating ? "overlay-content-active" : "overlay-content-enter"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={closeOverlay}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition-colors"
      >
        ✕
      </button>

      {/* Title */}
      <h4 className="font-bold text-slate-800 text-lg md:text-xl mb-4 pr-8">
        {policyDetails[showDetails]?.title}
      </h4>

      {/* Points */}
      <ul className="space-y-3">
        {policyDetails[showDetails]?.points.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm md:text-base text-slate-700"
          >
            {showDetails === "benefits" ? (
              <>
                <span className="flex-shrink-0 text-lg">{point.slice(0, 2)}</span>
                <span>{point.slice(2)}</span>
              </>
            ) : (
              <>
                <span
                  className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    showDetails === "concerta" ? "bg-amber-400" : "bg-teal-400"
                  }`}
                ></span>
                <span>{point}</span>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Close button at bottom */}
      <button
        onClick={closeOverlay}
        className={`mt-6 w-full py-3 rounded-xl font-medium text-white transition-all hover:opacity-90 ${
          showDetails === "benefits"
            ? "bg-gradient-to-r from-emerald-500 to-teal-500"
            : showDetails === "concerta"
              ? "bg-gradient-to-r from-amber-500 to-orange-500"
              : "bg-gradient-to-r from-teal-500 to-cyan-500"
        }`}
      >
        ปิด
      </button>
    </div>
  </div>
);

export default PolicyOverlay;
