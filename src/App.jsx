import React, { useState, useEffect, useRef } from 'react';

const ADHDProposal = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const [showFullBackground, setShowFullBackground] = useState(false);
  const [activeFramework, setActiveFramework] = useState(null);
  const [showDetails, setShowDetails] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      color: ['#14b8a6', '#f43f5e', '#f59e0b', '#3b82f6', '#8b5cf6'][Math.floor(Math.random() * 5)]
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  const sections = [
    { id: 1, title: 'ชื่อทีม', icon: '👥' },
    { id: 2, title: 'ชื่อโครงการ', icon: '📋' },
    { id: 3, title: 'ความเป็นมาและเหตุผล', icon: '📖' },
    { id: 4, title: 'กรอบแนวคิด', icon: '🔄' },
    { id: 5, title: 'เป้าประสงค์ระยะยาว', icon: '🎯' },
    { id: 6, title: 'วัตถุประสงค์', icon: '✅' },
  ];

  const objectives = [
    {
      id: 1,
      title: 'จัดทำข้อเสนอนโยบายคัดกรอง',
      desc: 'คัดกรองโรคสมาธิสั้นในเด็กประถม (อายุ 6-12 ปี)',
      shortTerm: ['Research Synthesis รวบรวมหลักฐานทางวิชาการ', 'Qualitative Interview สัมภาษณ์ผู้มีส่วนได้ส่วนเสีย', 'จัดทำเอกสารข้อเสนอนโยบายคัดกรองฉบับสมบูรณ์'],
      longTerm: ['มีระบบคัดกรอง ADHD ในโรงเรียนประถมทั่วประเทศ', 'เด็กได้รับการวินิจฉัยและรักษาทันท่วงที'],
      color: 'rose'
    },
    {
      id: 2,
      title: 'ผลักดัน Concerta เข้า NLEM',
      desc: 'จัดทำข้อเสนอนโยบายนำยา Concerta เข้าบัญชียาหลักแห่งชาติ',
      shortTerm: ['มีเอกสารข้อเสนอนโยบายฉบับสมบูรณ์', 'นำเสนอต่อคณะอนุกรรมการ NLEM', 'มีแนวร่วมจากภาคีเครือข่าย'],
      longTerm: ['Concerta ถูกบรรจุในบัญชียาหลัก', 'ผู้ป่วย ADHD เข้าถึงยาได้ฟรี'],
      color: 'amber'
    },
    {
      id: 3,
      title: 'สร้างความรู้และลดตราบาป',
      desc: 'สร้างความรู้ความเข้าใจและลดตราบาปเกี่ยวกับ ADHD',
      shortTerm: ['มีแคมเปญรณรงค์ 3 แคมเปญ', 'มีสื่อความรู้สำหรับผู้ปกครองและครู', 'ยอด engagement ≥ 100,000 ครั้ง'],
      longTerm: ['ประชาชนมีความเข้าใจที่ถูกต้อง', 'ลดอัตราการปฏิเสธการรักษา'],
      color: 'teal'
    }
  ];

  const partners = [
    { name: 'TIMS', icon: '🏛️', desc: 'สถาบันวิชาการเพื่อความยั่งยืนทางสุขภาพจิต' },
    { name: 'สมาคมจิตแพทย์เด็กฯ', icon: '👨‍⚕️', desc: 'สมาคมจิตแพทย์เด็กและวัยรุ่นแห่งประเทศไทย' },
    { name: 'กลุ่มผู้ปกครองเด็ก ADHD', icon: '👨‍👩‍👧', desc: 'เครือข่ายผู้ปกครองที่ดูแลเด็ก ADHD' },
    { name: 'NetPaMA', icon: '🌐', desc: 'Network of Parents and Mental Health Advocates' },
    { name: 'เครือข่ายฯ', icon: '🔗', desc: 'เครือข่ายภาคประชาสังคม' },
    { name: 'สื่อมวลชน', icon: '📺', desc: 'สื่อมวลชนและ Content Creators' }
  ];

  const policyDetails = {
    concerta: {
      title: '💊 นโยบายผลักดันยา Concerta',
      points: [
        'ยา Extended-release ออกฤทธิ์นาน 10-12 ชั่วโมง',
        'รับประทานวันละ 1 ครั้ง เพิ่ม medication adherence',
        'ระดับยาคงที่ ลด rebound effect และ mood swings',
        'ลดศักยภาพการนำไปใช้ในทางที่ผิด (abuse potential)'
      ]
    },
    screening: {
      title: '🔍 ข้อเสนอนโยบายคัดกรองในเด็กประถม',
      points: [
        'Research Synthesis รวบรวมหลักฐานทางวิชาการ',
        'Qualitative Interview สัมภาษณ์ผู้เกี่ยวข้อง',
        'จัดทำข้อเสนอนโยบายเสนอต่อหน่วยงานที่เกี่ยวข้อง',
        'เป้าหมาย: เด็กอายุ 6-12 ปี'
      ]
    },
    benefits: {
      title: '✅ สิทธิประโยชน์ในระบบประกันสุขภาพถ้วนหน้าของประเทศ',
      points: [
        '💰 ยา Concerta ฟรี ลดภาระจาก 3,500-8,000 บาท/เดือน เหลือ 0 บาท',
        '💊 กินวันละครั้งตอนเช้า ไม่ต้องกินที่โรงเรียน (ลด stigma)',
        '📈 เพิ่ม medication adherence → ผลการรักษาดีขึ้น',
        '🧒 เด็กได้รับการคัดกรองและวินิจฉัยเร็วขึ้น',
        '🏥 เข้าถึงการรักษาที่เหมาะสมในระบบสุขภาพ'
      ]
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative overflow-hidden"
      style={{ fontFamily: "'Google Sans', sans-serif" }}
    >
      <style>{`
        /* Google Sans is loaded via index.html */
        
        
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
        
        /* Liquid Glass iOS 26 Styles */
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
        
        /* Blob Animations */
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

      {/* Background */}
      <div className="animated-bg fixed inset-0 -z-10" />
      <div 
        className="fixed inset-0 -z-5 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(20, 184, 166, 0.08), transparent 40%)`
        }}
      />
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`
          }}
        />
      ))}

      <div className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <header className={`text-center mb-10 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-block mb-4 slide-up">
            <span className="px-5 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-sm font-bold shadow-lg shadow-teal-200">
              ✨ Young Policy Maker #2 ✨
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-3 slide-up stagger-1">
            ADHD to Ability
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-4 slide-up stagger-2">
            ตรวจเร็ว รู้ไว ไร้ตรา เด็กกล้าโต
          </h2>
          <p className="text-slate-500 text-sm md:text-base slide-up stagger-3">
            ข้อเสนอโครงการย่อย ภายใต้โครงการพัฒนาต้นแบบการสนับสนุนคนรุ่นใหม่ให้สร้างนโยบายสาธารณะเพื่อสุขภาวะเด็ก เยาวชน และครอบครัว
          </p>
          <div className="flex justify-center gap-3 mt-4 slide-up stagger-4">
            <span className="px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">☑ สุขภาพจิต</span>
          </div>
        </header>

        {/* Navigation */}
        <nav className="glass rounded-2xl p-4 mb-8 slide-up stagger-3">
          <div className="flex flex-wrap justify-center gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`nav-item px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 ${
                  activeSection === section.id ? 'active shadow-lg' : 'bg-white/50 hover:bg-white text-slate-600'
                }`}
              >
                <span>{section.icon}</span>
                <span className="hidden md:inline">{section.title}</span>
                <span className="md:hidden">{section.id}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Section 1: Team Name */}
        {activeSection === 1 && (
          <section className="slide-up">
            <div className="glass rounded-3xl p-8 text-center section-card">
              <div className="text-6xl mb-4">👥</div>
              <h2 className="text-xl text-slate-500 mb-2">ชื่อทีม</h2>
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                A Dee H Dee
              </h3>
              <p className="text-2xl text-slate-600">(อะดี... เฮ็ดดี..)</p>
            </div>
          </section>
        )}

        {/* Section 2: Project Name */}
        {activeSection === 2 && (
          <section className="slide-up">
            <div className="glass rounded-3xl p-8 text-center section-card">
              <div className="text-6xl mb-4">📋</div>
              <h2 className="text-xl text-slate-500 mb-2">ชื่อโครงการ</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                ADHD to Ability
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['ตรวจเร็ว', 'รู้ไว', 'ไร้ตรา', 'เด็กกล้าโต'].map((item, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-bold shadow-lg float"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 3: Background */}
        {activeSection === 3 && (
          <section className="slide-up space-y-6">
            <div className="glass rounded-3xl p-8 section-card">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📖</span>
                <h2 className="text-2xl font-bold text-slate-800">ความเป็นมา หลักการและเหตุผล</h2>
              </div>
              
              {/* Abstract */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 mb-6 border-l-4 border-teal-500">
                <h3 className="font-bold text-teal-800 mb-4 flex items-center gap-2">
                  <span>📝</span> บทคัดย่อ
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                  โรคสมาธิสั้น (ADHD) พบได้ <strong className="text-teal-700">ร้อยละ 8.1</strong> ในเด็กนักเรียนประถมของไทย 
                  หรือประมาณ <strong className="text-teal-700">1 ล้านคน</strong> แต่เด็กจำนวนมากไม่ได้รับการวินิจฉัย 
                  เนื่องจากขาดระบบคัดกรองเชิงรุก ยา Concerta ที่เหมาะกับเด็กวัยเรียนยังไม่อยู่ในบัญชียาหลัก 
                  ทำให้ครอบครัวต้องจ่ายเอง <strong className="text-rose-600">3,500-8,000 บาท/เดือน</strong>
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/80 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-rose-600">6.5-11 ปี</div>
                    <div className="text-sm text-slate-600">อายุขัยสั้นกว่าคนทั่วไป</div>
                  </div>
                  <div className="bg-white/80 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-amber-600">25-40%</div>
                    <div className="text-sm text-slate-600">ของผู้ต้องขังมี ADHD</div>
                  </div>
                  <div className="bg-white/80 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-purple-600">2-5 หมื่นล้าน</div>
                    <div className="text-sm text-slate-600">บาท/ปี ต้นทุนสังคม</div>
                  </div>
                </div>
              </div>

              {/* Toggle Full Background */}
              <button
                onClick={() => setShowFullBackground(!showFullBackground)}
                className="w-full py-4 bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl font-medium text-slate-700 hover:from-slate-200 hover:to-slate-100 transition-all flex items-center justify-center gap-2 group"
              >
                <span>{showFullBackground ? '📖 ซ่อนความเป็นมาฉบับเต็ม' : '📚 อ่านความเป็นมาฉบับเต็ม'}</span>
                <span className={`transition-transform ${showFullBackground ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {/* Full Background Content */}
              <div className={`expand-content ${showFullBackground ? 'open' : ''}`}>
                <div className="mt-6 space-y-6">
                  
                  {/* โรคสมาธิสั้น */}
                  <div className="bg-rose-50 rounded-2xl p-6 border-l-4 border-rose-400">
                    <h4 className="font-bold text-rose-800 mb-3 flex items-center gap-2">
                      <span>🧠</span> โรคสมาธิสั้น
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed mb-4">
                      โรคสมาธิสั้น (ADHD) เป็นความผิดปกติทางพัฒนาการระบบประสาท ที่มีลักษณะเด่นคือ
                      อาการขาดสมาธิ (inattention) อยู่ไม่นิ่ง (hyperactivity) และหุนหันพลันแล่น (impulsivity)
                      ตามเกณฑ์ DSM-5 อาการจะปรากฏก่อนอายุ 12 ปี และวินิจฉัยได้ตั้งแต่อายุ 6 ปีขึ้นไป
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      การศึกษาโดย ทวีศิลป์ วิษณุโยธิน และคณะ (2556) พบความชุกร้อยละ 8.1 ในเด็ก ป.1-5
                      แต่ประเทศไทยไม่มีระบบคัดกรองเชิงรุก ทำให้เด็กจำนวนมากไม่ได้รับการวินิจฉัย
                      ทั้งที่มีเครื่องมือ SNAP-IV ฉบับภาษาไทยที่ผ่านการทดสอบแล้ว
                    </p>
                  </div>

                  {/* วิธีการรักษา */}
                  <div className="bg-amber-50 rounded-2xl p-6 border-l-4 border-amber-400">
                    <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                      <span>💊</span> วิธีการรักษา
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed mb-4">
                      หลักฐานยืนยันว่า ADHD จำเป็นต้องรักษาด้วยยา (pharmacotherapy) เป็นหลัก 
                      โดย methylphenidate เป็นยาที่มีประสิทธิภาพสูงสุดสำหรับเด็กและวัยรุ่น
                    </p>
                    <div className="bg-white/80 rounded-xl p-4">
                      <h5 className="font-semibold text-amber-700 mb-2">เปรียบเทียบ Concerta vs Ritalin</h5>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="font-medium text-slate-600">ประเด็น</div>
                        <div className="font-medium text-teal-700">Concerta</div>
                        <div className="font-medium text-rose-700">Ritalin</div>
                        
                        <div>ระยะออกฤทธิ์</div>
                        <div className="text-teal-600">10-12 ชม.</div>
                        <div className="text-rose-600">3-4 ชม.</div>
                        
                        <div>รับประทาน</div>
                        <div className="text-teal-600">1 ครั้ง/วัน</div>
                        <div className="text-rose-600">2-3 ครั้ง/วัน</div>
                        
                        <div>ให้ยาที่โรงเรียน</div>
                        <div className="text-teal-600">ไม่จำเป็น ✓</div>
                        <div className="text-rose-600">จำเป็น</div>
                        
                        <div>บัญชียาหลัก</div>
                        <div className="text-rose-600">ไม่อยู่ ✗</div>
                        <div className="text-teal-600">อยู่ ✓</div>
                        
                        <div>ค่าใช้จ่าย/เดือน</div>
                        <div className="text-rose-600">3,500-8,000฿</div>
                        <div className="text-teal-600">เบิกได้</div>
                      </div>
                    </div>
                  </div>

                  {/* ตราบาป */}
                  <div className="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-400">
                    <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                      <span>🏷️</span> ตราบาปของโรค
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed mb-4">
                      อุปสรรคสำคัญคือ "ความไม่รู้" และ "ความกลัว" ผู้ปกครองบางส่วนมองว่าเป็นโรคน่ากลัว
                      จึงไม่พามาพบแพทย์ วัฒนธรรมไทยที่เน้นความเชื่อฟังทำให้เด็ก ADHD ถูกมองว่า "ดื้อ" "ไม่มีมารยาท"
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/80 rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-600">52%</div>
                        <div className="text-sm text-slate-600">เด็ก ADHD ถูกเพื่อนปฏิเสธ (vs 14% ในเด็กทั่วไป)</div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-600">2.8 เท่า</div>
                        <div className="text-sm text-slate-600">เด็กที่ถูกครูลงโทษมีโอกาสเป็น ADHD</div>
                      </div>
                    </div>
                  </div>

                  {/* ผลกระทบ */}
                  <div className="bg-slate-100 rounded-2xl p-6 border-l-4 border-slate-400">
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <span>⚠️</span> ผลกระทบของโรค
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      เด็ก ADHD มักมีโรคร่วมสูงถึง 53.5% โดยเฉพาะวิตกกังวล ซึมเศร้า และโรคดื้อต่อต้าน
                      หากไม่รักษา มีโอกาสเป็นเด็กมีปัญหา 3-4 เท่า ติดสารเสพติด และเข้าสู่ระบบยุติธรรม
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 4: Framework - Flowchart */}
        {activeSection === 4 && (
          <section className="slide-up space-y-6">
            <div className="glass rounded-3xl p-6 md:p-8 section-card">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🔄</span>
                <h2 className="text-2xl font-bold text-slate-800">กรอบแนวคิดในการขับเคลื่อนนโยบาย</h2>
              </div>

              {/* Problems */}
              <div className="mb-8">
                <h3 className="font-bold text-slate-700 mb-4">ประเด็นปัญหาที่ต้องการขับเคลื่อน</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: '🔍', text: 'การขาดระบบคัดกรอง ADHD ในเด็กประถม', color: 'rose' },
                    { icon: '💊', text: 'ความไม่เท่าเทียมในการเข้าถึงยาที่มีประสิทธิภาพ', color: 'amber' },
                    { icon: '🏷️', text: 'ตราบาปทางสังคมที่ทำให้ผู้ปกครองปฏิเสธการรักษา', color: 'purple' }
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className={`bg-${item.color}-50 rounded-xl p-4 border-l-4 border-${item.color}-400 card-3d`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <p className="text-sm text-slate-700 mt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two Pillars Strategy */}
              <div className="mb-8">
                <h3 className="font-bold text-slate-700 mb-4">กลยุทธ์ 2 เสาหลัก</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                  
                  {/* Pillar 1 */}
                  <div 
                    className={`bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 cursor-pointer card-3d border-2 ${
                      activeFramework === 'pillar1' ? 'border-rose-400 ring-4 ring-rose-200' : 'border-rose-200'
                    }`}
                    onClick={() => setActiveFramework(activeFramework === 'pillar1' ? null : 'pillar1')}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full text-white font-bold text-sm">
                        🎯 เสา 1: Policy Push
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/80 rounded-xl p-4 flex items-start gap-3">
                        <span className="text-2xl">💊</span>
                        <div>
                          <div className="font-semibold text-rose-800">ข้อเสนอนโยบาย Concerta</div>
                          <div className="text-sm text-slate-600">นำเสนอต่อคณะอนุกรรมการ NLEM</div>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4 flex items-start gap-3">
                        <span className="text-2xl">🔍</span>
                        <div>
                          <div className="font-semibold text-rose-800">ข้อเสนอนโยบายคัดกรอง</div>
                          <div className="text-sm text-slate-600">Research + Interview → นำเสนอต่อ กระทรวงสาธารณสุข และกระทรวงศึกษาธิการ</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div 
                    className={`bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 cursor-pointer card-3d border-2 ${
                      activeFramework === 'pillar2' ? 'border-teal-400 ring-4 ring-teal-200' : 'border-teal-200'
                    }`}
                    onClick={() => setActiveFramework(activeFramework === 'pillar2' ? null : 'pillar2')}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full text-white font-bold text-sm">
                        📢 เสา 2: Social Campaign
                      </div>
                      <div className="ml-auto text-xs bg-white/80 px-3 py-1 rounded-full text-teal-600 font-medium">
                        🔄 หนุนเสริม Policy
                      </div>
                    </div>
                    <div className="space-y-3">
                      {['Social Media', 'School Campaign', 'Community Event'].map((camp, i) => (
                        <div key={i} className="bg-white/80 rounded-xl p-3 flex items-center gap-3">
                          <span className="text-xl">{['📱', '🏫', '🎪'][i]}</span>
                          <span className="font-medium text-teal-800">{camp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Flowchart Visual - Liquid Glass iOS 26 Style */}
              <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden min-h-[500px]">
                {/* Liquid Glass Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100/80 via-white/60 to-blue-50/80"></div>
                
                {/* Animated Liquid Blobs */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Large blobs */}
                  <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-rose-300/40 to-pink-400/30 rounded-full blur-3xl animate-blob"></div>
                  <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-teal-300/40 to-cyan-400/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-amber-300/40 to-yellow-400/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-emerald-300/30 to-teal-400/20 rounded-full blur-3xl animate-blob-slow"></div>
                  
                  {/* Medium blobs */}
                  <div className="absolute top-10 left-1/3 w-48 h-48 bg-gradient-to-br from-violet-300/50 to-purple-400/30 rounded-full blur-2xl animate-blob-reverse"></div>
                  <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-gradient-to-br from-blue-300/40 to-indigo-400/30 rounded-full blur-2xl animate-blob-reverse animation-delay-3000"></div>
                  <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-gradient-to-br from-pink-300/50 to-rose-400/30 rounded-full blur-2xl animate-blob animation-delay-1000"></div>
                  
                  {/* Small accent blobs */}
                  <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400/60 to-teal-500/40 rounded-full blur-xl animate-float"></div>
                  <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-amber-400/60 to-orange-500/40 rounded-full blur-xl animate-float animation-delay-2000"></div>
                  <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-rose-400/60 to-pink-500/40 rounded-full blur-xl animate-float animation-delay-4000"></div>
                </div>
                
                {/* Glass overlay */}
                <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-bold text-2xl text-slate-800 mb-10 text-center drop-shadow-sm">แผนผังการขับเคลื่อน</h3>
                  
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
                            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#64748b" stopOpacity="0.8"/>
                          </linearGradient>
                        </defs>
                        <path d="M0 12 L50 12 M40 4 L52 12 L40 20" stroke="url(#arrowGrad1)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-arrow-flow"/>
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
                        <path d="M0 12 L50 12 M40 4 L52 12 L40 20" stroke="url(#arrowGrad1)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-arrow-flow"/>
                      </svg>
                    </div>
                    <div className="lg:hidden text-4xl text-slate-300 animate-bounce">↓</div>

                    {/* Policies - Glass Cards with popup above */}
                    <div className="flex flex-col gap-4 relative">
                      {/* Policy Popup - appears ABOVE the buttons */}
                      {(showDetails === 'concerta' || showDetails === 'screening') && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-20 w-80 slide-up">
                          <div className="liquid-glass-card p-4 shadow-xl border border-amber-200">
                            <h4 className="font-bold text-slate-800 mb-3 text-sm">{policyDetails[showDetails].title}</h4>
                            <ul className="space-y-2">
                              {policyDetails[showDetails].points.map((point, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0"></span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                            <button 
                              onClick={(e) => { e.stopPropagation(); setShowDetails(null); }}
                              className="mt-3 text-xs text-amber-600 hover:text-amber-800 font-medium"
                            >
                              ✕ ปิด
                            </button>
                          </div>
                        </div>
                      )}
                      
                      <div 
                        className={`liquid-glass-card-amber px-6 py-4 text-center hover:scale-105 transition-all duration-500 cursor-pointer ${showDetails === 'concerta' ? 'ring-4 ring-amber-300' : ''}`}
                        onClick={() => setShowDetails(showDetails === 'concerta' ? null : 'concerta')}
                      >
                        <span className="text-3xl">💊</span>
                        <div className="font-bold text-amber-900 mt-1">Concerta</div>
                        <div className="text-xs text-amber-700">→ บัญชียาหลัก</div>
                      </div>
                      <div 
                        className={`liquid-glass-card-amber px-6 py-4 text-center hover:scale-105 transition-all duration-500 cursor-pointer ${showDetails === 'screening' ? 'ring-4 ring-amber-300' : ''}`}
                        onClick={() => setShowDetails(showDetails === 'screening' ? null : 'screening')}
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
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.5"/>
                            <stop offset="100%" stopColor="#059669" stopOpacity="1"/>
                          </linearGradient>
                        </defs>
                        <path d="M0 12 L50 12 M40 4 L52 12 L40 20" stroke="url(#arrowGrad2)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-arrow-flow"/>
                      </svg>
                    </div>
                    <div className="lg:hidden text-4xl text-emerald-400 animate-bounce">↓</div>

                    {/* Result - Glass Card with Glow - NOW CLICKABLE */}
                    <div className="relative">
                      {/* Benefits Popup - appears ABOVE */}
                      {showDetails === 'benefits' && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-20 w-96 slide-up">
                          <div className="liquid-glass-card p-5 shadow-xl border border-emerald-200">
                            <h4 className="font-bold text-emerald-800 mb-3">{policyDetails.benefits.title}</h4>
                            <ul className="space-y-2">
                              {policyDetails.benefits.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                  <span className="flex-shrink-0">{point.slice(0, 2)}</span>
                                  <span>{point.slice(2)}</span>
                                </li>
                              ))}
                            </ul>
                            <button 
                              onClick={(e) => { e.stopPropagation(); setShowDetails(null); }}
                              className="mt-4 text-sm text-emerald-600 hover:text-emerald-800 font-medium"
                            >
                              ✕ ปิด
                            </button>
                          </div>
                        </div>
                      )}
                      
                      <div 
                        className={`liquid-glass-card-emerald p-6 text-center min-w-[180px] hover:scale-110 transition-all duration-500 animate-pulse-glow cursor-pointer ${showDetails === 'benefits' ? 'ring-4 ring-emerald-300' : ''}`}
                        onClick={() => setShowDetails(showDetails === 'benefits' ? null : 'benefits')}
                      >
                        <span className="text-5xl drop-shadow-lg">✅</span>
                        <div className="font-bold text-white text-lg mt-3 drop-shadow leading-tight">สิทธิประโยชน์</div>
                        <div className="text-xs text-white/90 mt-1 leading-tight">ในระบบประกันสุขภาพ<br/>ถ้วนหน้าของประเทศ</div>
                        <div className="text-xs text-white/70 mt-2">👆 กดเพื่อดูรายละเอียด</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partners */}
              <div className="mt-8 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6">
                <h3 className="font-bold text-violet-800 mb-4 flex items-center gap-2">
                  <span>🤝</span> แนวร่วมหลัก
                </h3>
                <div className="flex flex-wrap gap-3">
                  {partners.map((partner, i) => (
                    <div
                      key={i}
                      className="group relative bg-white rounded-xl px-4 py-2 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all cursor-pointer icon-bounce"
                    >
                      <span className="icon text-xl mr-2">{partner.icon}</span>
                      <span className="font-medium text-violet-800 text-sm">{partner.name}</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {partner.desc}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center text-sm text-slate-500">
                  <strong>นำเสนอต่อ:</strong> คณะอนุกรรมการ NLEM • กระทรวงสาธารณสุข • กรมสุขภาพจิต • กระทรวงศึกษาธิการ
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 5: Long-term Goals */}
        {activeSection === 5 && (
          <section className="slide-up">
            <div className="glass rounded-3xl p-8 section-card">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🎯</span>
                <h2 className="text-2xl font-bold text-slate-800">เป้าประสงค์ เป้าหมายระยะยาว</h2>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-200 mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  เด็กไทยที่มีภาวะสมาธิสั้น (ADHD) <strong className="text-emerald-700">ทุกคน</strong> ได้รับการคัดกรอง วินิจฉัย 
                  และเข้าถึงการรักษาที่มีประสิทธิภาพอย่างเท่าเทียม 
                  โดยปราศจากอุปสรรคด้านตราบาปทางสังคมและข้อจำกัดด้านค่าใช้จ่าย 
                  ส่งผลให้เด็ก ADHD สามารถพัฒนาศักยภาพได้เต็มที่ มีคุณภาพชีวิตที่ดี 
                  และเติบโตเป็นพลเมืองที่มีส่วนร่วมในการพัฒนาประเทศ
                </p>
              </div>

              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-6 text-white text-center">
                <div className="text-sm opacity-90 mb-2">วิสัยทัศน์</div>
                <div className="text-2xl md:text-3xl font-bold">
                  "ตรวจเร็ว รู้ไว ไร้ตรา เด็กกล้าโต"
                </div>
                <div className="text-sm opacity-90 mt-2">
                  ค้นพบเร็ว ไม่มีตราบาป เด็กเติบโตอย่างมั่นใจ
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 6: Objectives */}
        {activeSection === 6 && (
          <section className="slide-up space-y-6">
            <div className="glass rounded-3xl p-8 section-card">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">✅</span>
                <h2 className="text-2xl font-bold text-slate-800">วัตถุประสงค์ของโครงการ</h2>
              </div>

              <div className="space-y-6">
                {objectives.map((obj, i) => (
                  <div 
                    key={obj.id}
                    className={`bg-gradient-to-br from-${obj.color}-50 to-${obj.color}-100/50 rounded-2xl p-6 border-2 border-${obj.color}-200 card-3d slide-up`}
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${obj.color}-400 to-${obj.color}-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        {obj.id}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-${obj.color}-800 text-lg mb-1`}>{obj.title}</h3>
                        <p className="text-slate-600 text-sm">{obj.desc}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white/80 rounded-xl p-4">
                        <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                          <span>📅</span> ผลลัพธ์ระยะสั้น (ก.พ.-ต.ค. 2569)
                        </h4>
                        <ul className="space-y-1">
                          {obj.shortTerm.map((item, j) => (
                            <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                              <span className={`w-1.5 h-1.5 bg-${obj.color}-400 rounded-full mt-1.5 flex-shrink-0`}></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4">
                        <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                          <span>🚀</span> ผลลัพธ์ระยะยาว
                        </h4>
                        <ul className="space-y-1">
                          {obj.longTerm.map((item, j) => (
                            <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                              <span className={`w-1.5 h-1.5 bg-${obj.color}-400 rounded-full mt-1.5 flex-shrink-0`}></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer with Logos */}
        <footer className="mt-10">
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-sm text-slate-500 mb-4">สนับสนุนโดย</p>
            <div className="flex justify-center items-center gap-8 flex-wrap mb-4">
              <img src="/assets/logo1.jpg" alt="AIDS Access Foundation" className="h-16 object-contain" />
              <img src="/assets/logo2.jpg" alt="สสส." className="h-16 object-contain" />
              <div className="h-16 px-4 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg text-slate-400 text-sm">
                YPM Logo
              </div>
            </div>
            <p className="text-slate-400 text-sm">โครงการ ADHD to Ability © 2569 | Young Policy Maker #2</p>
            <p className="text-slate-400 text-xs mt-1">ทีม A Dee H Dee</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ADHDProposal;
