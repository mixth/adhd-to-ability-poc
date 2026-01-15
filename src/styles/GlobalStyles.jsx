import React from "react";

const GlobalStyles = () => (
  <style>{`
    .animated-bg {
      background: linear-gradient(-45deg, #f0fdfa, #fef1f2, #fefce8, #ede9fe, #f0f9ff);
      background-size: 400% 400%;
      animation: gradientShift 15s ease infinite;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .particle {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      opacity: 0.3;
      filter: blur(1px);
      animation: floatParticle var(--duration) ease-in-out infinite;
      animation-delay: var(--delay);
    }

    @keyframes floatParticle {
      0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
      50% { transform: translateY(-40px) translateX(-15px) scale(1.1); opacity: 0.5; }
    }

    .glass {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.9);
    }

    .card-3d {
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      transform-style: preserve-3d;
    }

    .card-3d:hover {
      transform: perspective(1000px) rotateX(2deg) rotateY(-2deg) translateY(-6px) scale(1.01);
    }

    .gradient-text {
      background: linear-gradient(135deg, #14b8a6, #0891b2, #6366f1);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: textGradient 4s linear infinite;
    }

    @keyframes textGradient {
      0% { background-position: 0% 50%; }
      100% { background-position: 200% 50%; }
    }

    .slide-up {
      opacity: 0;
      transform: translateY(40px);
      animation: slideUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    @keyframes slideUp {
      to { opacity: 1; transform: translateY(0); }
    }

    .overlay-backdrop {
      transition: opacity 0.3s ease, backdrop-filter 0.3s ease;
    }

    .overlay-backdrop-enter {
      opacity: 0;
      backdrop-filter: blur(0px);
      -webkit-backdrop-filter: blur(0px);
    }

    .overlay-backdrop-active {
      opacity: 1;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .overlay-content {
      transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .overlay-content-enter {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }

    .overlay-content-active {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    .stagger-1 { animation-delay: 0.1s; }
    .stagger-2 { animation-delay: 0.2s; }
    .stagger-3 { animation-delay: 0.3s; }
    .stagger-4 { animation-delay: 0.4s; }
    .stagger-5 { animation-delay: 0.5s; }

    .arrow-flow {
      animation: arrowPulse 1.5s ease-in-out infinite;
    }

    @keyframes arrowPulse {
      0%, 100% { transform: translateX(0); opacity: 1; }
      50% { transform: translateX(6px); opacity: 0.6; }
    }

    .float {
      animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    .pulse-glow {
      animation: pulseGlow 2s ease-in-out infinite;
    }

    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
      50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.5); }
    }

    .liquid-glass-card {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.8);
      box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8),
        inset 0 -1px 0 rgba(0, 0, 0, 0.05);
    }

    .liquid-glass-card-rose {
      background: linear-gradient(135deg, rgba(244, 63, 94, 0.8), rgba(236, 72, 153, 0.8));
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow:
        0 8px 32px rgba(244, 63, 94, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
    }

    .liquid-glass-card-teal {
      background: linear-gradient(135deg, rgba(20, 184, 166, 0.8), rgba(16, 185, 129, 0.8));
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow:
        0 8px 32px rgba(20, 184, 166, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
    }

    .liquid-glass-card-amber {
      background: linear-gradient(135deg, rgba(251, 191, 36, 0.6), rgba(245, 158, 11, 0.6));
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow:
        0 8px 32px rgba(245, 158, 11, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
    }

    .liquid-glass-card-emerald {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9));
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow:
        0 8px 32px rgba(16, 185, 129, 0.4),
        0 0 60px rgba(16, 185, 129, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
    }

    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(20px, -30px) scale(1.1); }
      50% { transform: translate(-20px, 20px) scale(0.9); }
      75% { transform: translate(30px, 10px) scale(1.05); }
    }

    @keyframes blob-reverse {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(-30px, 20px) scale(0.95); }
      50% { transform: translate(20px, -20px) scale(1.1); }
      75% { transform: translate(-10px, -30px) scale(1); }
    }

    @keyframes blob-slow {
      0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
      50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.5; }
    }

    .animate-blob {
      animation: blob 8s ease-in-out infinite;
    }

    .animate-blob-reverse {
      animation: blob-reverse 10s ease-in-out infinite;
    }

    .animate-blob-slow {
      animation: blob-slow 12s ease-in-out infinite;
    }

    .animation-delay-1000 { animation-delay: 1s; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-3000 { animation-delay: 3s; }
    .animation-delay-4000 { animation-delay: 4s; }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-arrow-flow {
      animation: arrowFlow 1.5s ease-in-out infinite;
    }

    @keyframes arrowFlow {
      0%, 100% { opacity: 0.5; stroke-dashoffset: 0; }
      50% { opacity: 1; stroke-dashoffset: 10; }
    }

    .animate-pulse-glow {
      animation: pulseGlowStrong 2s ease-in-out infinite;
    }

    @keyframes pulseGlowStrong {
      0%, 100% {
        box-shadow: 0 8px 32px rgba(16, 185, 129, 0.4), 0 0 60px rgba(16, 185, 129, 0.2);
        transform: scale(1);
      }
      50% {
        box-shadow: 0 8px 48px rgba(16, 185, 129, 0.6), 0 0 80px rgba(16, 185, 129, 0.4);
        transform: scale(1.02);
      }
    }

    .shine {
      position: relative;
      overflow: hidden;
    }

    .shine::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.6) 50%, transparent 60%);
      transform: translateX(-100%);
    }

    .shine:hover::after {
      animation: shine 0.7s ease-out;
    }

    @keyframes shine {
      to { transform: translateX(100%); }
    }

    .feedback-dash {
      stroke-dasharray: 8 5;
      animation: dashFlow 1.5s linear infinite;
    }

    @keyframes dashFlow {
      to { stroke-dashoffset: -13; }
    }

    .nav-item {
      transition: all 0.3s ease;
    }

    .nav-item.active {
      background: linear-gradient(135deg, #14b8a6, #0891b2);
      color: white;
      transform: scale(1.05);
    }

    .expand-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease-out, opacity 0.3s ease;
      opacity: 0;
    }

    .expand-content.open {
      max-height: 5000px;
      opacity: 1;
    }

    .section-card {
      transition: all 0.4s ease;
    }

    .section-card:hover {
      box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
    }

    .icon-bounce:hover .icon {
      animation: iconBounce 0.5s ease;
    }

    @keyframes iconBounce {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2) rotate(-5deg); }
    }
  `}</style>
);

export default GlobalStyles;
