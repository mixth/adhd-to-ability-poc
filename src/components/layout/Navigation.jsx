import React from "react";

const Navigation = ({ sections, activeSection, setActiveSection }) => (
  <nav className="glass rounded-2xl p-4 mb-8 slide-up stagger-3">
    <div className="flex flex-wrap justify-center gap-2">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => setActiveSection(section.id)}
          className={`nav-item px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 ${
            activeSection === section.id
              ? "active shadow-lg"
              : "bg-white/50 hover:bg-white text-slate-600"
          }`}
          title={section.title}
        >
          <span className="text-lg md:text-base">{section.icon}</span>
          <span className="hidden md:inline">{section.title}</span>
        </button>
      ))}
    </div>
  </nav>
);

export default Navigation;
