import React from "react";

const PROJECT_KEYWORDS = ["ตรวจเร็ว", "รู้ไว", "ไร้ตรา", "เด็กกล้าโต"];

const ProjectNameSection = () => (
  <section className="slide-up">
    <div className="glass rounded-3xl p-8 text-center section-card">
      <div className="text-6xl mb-4">📋</div>
      <h2 className="text-xl text-slate-500 mb-2">ชื่อโครงการ</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
        ADHD to Ability
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {PROJECT_KEYWORDS.map((item, i) => (
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
);

export default ProjectNameSection;
