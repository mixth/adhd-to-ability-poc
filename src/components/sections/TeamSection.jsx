import React from "react";
import { teamMembers } from "../../data/sections";

const TeamSection = () => (
  <section className="slide-up">
    <div className="glass rounded-3xl p-8 text-center section-card">
      <div className="text-6xl mb-4">👥</div>
      <h2 className="text-xl text-slate-500 mb-2">ชื่อทีม</h2>
      <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
        A Dee H Dee
      </h3>
      <p className="text-2xl text-slate-600 mb-8">(อะดี... เฮ็ดดี...)</p>

      <div className="mt-6">
        <h4 className="text-sm text-slate-400 mb-4">สมาชิกในทีม</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl px-2 py-3 border border-teal-200 hover:shadow-lg hover:border-teal-300 transition-all card-3d aspect-square flex flex-col items-center justify-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-28 h-28 mx-auto mb-2 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={`${import.meta.env.BASE_URL}assets/${member.photo}`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-semibold text-slate-800">
                {member.title} {member.name}
              </div>
              <div className="text-teal-600 text-sm mt-1">
                ({member.nickname})
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
