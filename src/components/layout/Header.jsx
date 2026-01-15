import React from "react";

const Header = ({ loaded }) => (
  <header
    className={`text-center mb-10 transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
  >
    <div className="inline-block mb-10 slide-up">
      <span className="px-5 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-sm font-bold shadow-lg shadow-teal-200">
        ✨ Young Policy Makers #2 ✨
      </span>
    </div>
    <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-3 slide-up stagger-1">
      ADHD to Ability
    </h1>
    <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-4 slide-up stagger-2">
      ตรวจเร็ว รู้ไว ไร้ตรา เด็กกล้าโต
    </h2>
    <p className="text-slate-500 text-sm md:text-base slide-up stagger-3">
      ข้อเสนอโครงการย่อย
      ภายใต้โครงการพัฒนาต้นแบบการสนับสนุนคนรุ่นใหม่ให้สร้างนโยบายสาธารณะเพื่อสุขภาวะเด็ก
      เยาวชน และครอบครัว
    </p>
    <div className="flex justify-center gap-3 mt-4 slide-up stagger-4">
      <span className="px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
        หมวด: สุขภาพจิต ♥️
      </span>
    </div>
  </header>
);

export default Header;
