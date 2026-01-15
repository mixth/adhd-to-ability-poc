import React from "react";

const FlowchartDiagram = ({ openOverlay }) => (
  <div className="relative z-10">
    <h3 className="font-bold text-2xl text-slate-800 mb-10 text-center drop-shadow-sm">
      แผนผังการขับเคลื่อน
    </h3>

    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 justify-center">
      {/* Problem - Glass Card */}
      <div className="liquid-glass-card p-6 text-center min-w-[140px] hover:scale-105 transition-all duration-500">
        <span className="text-5xl drop-shadow-lg">⚠️</span>
        <div className="font-bold text-slate-800 mt-3 text-lg">PROBLEM</div>
        <div className="text-xs text-slate-500 mt-1">ปัญหา ADHD</div>
      </div>

      {/* Arrow */}
      <div className="hidden lg:flex items-center">
        <svg width="60" height="24" viewBox="0 0 60 24" className="text-slate-400">
          <defs>
            <linearGradient id="arrowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#64748b" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M0 12 L50 12 M40 4 L52 12 L40 20"
            stroke="url(#arrowGrad1)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-arrow-flow"
          />
        </svg>
      </div>
      <div className="lg:hidden text-4xl text-slate-300 animate-bounce">↓</div>

      {/* Two Pillars - Glass Cards */}
      <div className="flex flex-col gap-4">
        <div className="liquid-glass-card-rose px-8 py-4 text-center hover:scale-105 transition-all duration-500 cursor-pointer">
          <span className="text-3xl">🎯</span>
          <div className="font-bold text-white text-lg mt-1 drop-shadow">Policy Push</div>
          <div className="text-xs text-white/80">ผลักดันนโยบาย</div>
        </div>
        <div className="liquid-glass-card-teal px-8 py-4 text-center hover:scale-105 transition-all duration-500 cursor-pointer">
          <span className="text-3xl">📢</span>
          <div className="font-bold text-white text-lg mt-1 drop-shadow">Social Campaign</div>
          <div className="text-xs text-white/80">สร้างกระแสสังคม</div>
        </div>
      </div>

      {/* Arrow */}
      <div className="hidden lg:flex items-center">
        <svg width="60" height="24" viewBox="0 0 60 24" className="text-slate-400">
          <path
            d="M0 12 L50 12 M40 4 L52 12 L40 20"
            stroke="url(#arrowGrad1)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-arrow-flow"
          />
        </svg>
      </div>
      <div className="lg:hidden text-4xl text-slate-300 animate-bounce">↓</div>

      {/* Policies - Glass Cards */}
      <div className="flex flex-col gap-4">
        <div
          className="liquid-glass-card-amber px-6 py-4 text-center hover:scale-105 transition-all duration-500 cursor-pointer"
          onClick={() => openOverlay("concerta")}
        >
          <span className="text-3xl">💊</span>
          <div className="font-bold text-amber-900 mt-1">Concerta</div>
          <div className="text-xs text-amber-700">→ บัญชียาหลัก</div>
        </div>
        <div
          className="liquid-glass-card-amber px-6 py-4 text-center hover:scale-105 transition-all duration-500 cursor-pointer"
          onClick={() => openOverlay("screening")}
        >
          <span className="text-3xl">🔍</span>
          <div className="font-bold text-amber-900 mt-1">คัดกรอง</div>
          <div className="text-xs text-amber-700">เด็ก 6-12 ปี</div>
        </div>
      </div>

      {/* Arrow */}
      <div className="hidden lg:flex items-center">
        <svg width="60" height="24" viewBox="0 0 60 24">
          <defs>
            <linearGradient id="arrowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#059669" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0 12 L50 12 M40 4 L52 12 L40 20"
            stroke="url(#arrowGrad2)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-arrow-flow"
          />
        </svg>
      </div>
      <div className="lg:hidden text-4xl text-emerald-400 animate-bounce">↓</div>

      {/* Result - Glass Card with Glow */}
      <div
        className="liquid-glass-card-emerald p-6 text-center min-w-[180px] hover:scale-110 transition-all duration-500 animate-pulse-glow cursor-pointer"
        onClick={() => openOverlay("benefits")}
      >
        <span className="text-5xl drop-shadow-lg">✅</span>
        <div className="font-bold text-white text-lg mt-3 drop-shadow leading-tight">
          สิทธิประโยชน์
        </div>
        <div className="text-xs text-white/90 mt-1 leading-tight">
          ในระบบประกันสุขภาพ
          <br />
          ถ้วนหน้าของประเทศ
        </div>
        <div className="text-xs text-white/70 mt-2">👆 กดเพื่อดูรายละเอียด</div>
      </div>
    </div>
  </div>
);

export default FlowchartDiagram;
