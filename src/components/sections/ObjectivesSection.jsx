import React from "react";
import { objectives } from "../../data/objectives";

const ObjectivesSection = () => (
  <section className="slide-up space-y-6">
    <div className="glass rounded-3xl p-8 section-card">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">✅</span>
        <h2 className="text-2xl font-bold text-slate-800">
          วัตถุประสงค์ของโครงการ
        </h2>
      </div>

      <div className="space-y-6">
        {objectives.map((obj, i) => (
          <div
            key={obj.id}
            className={`bg-gradient-to-br from-${obj.color}-50 to-${obj.color}-100/50 rounded-2xl p-6 border-2 border-${obj.color}-200 card-3d slide-up`}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br from-${obj.color}-400 to-${obj.color}-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}
              >
                {obj.id}
              </div>
              <div className="flex-1">
                <h3 className={`font-bold text-${obj.color}-800 text-lg mb-1`}>
                  {obj.title}
                </h3>
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
                    <li
                      key={j}
                      className="text-sm text-slate-600 flex items-start gap-2"
                    >
                      <span
                        className={`w-1.5 h-1.5 bg-${obj.color}-400 rounded-full mt-1.5 flex-shrink-0`}
                      ></span>
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
                    <li
                      key={j}
                      className="text-sm text-slate-600 flex items-start gap-2"
                    >
                      <span
                        className={`w-1.5 h-1.5 bg-${obj.color}-400 rounded-full mt-1.5 flex-shrink-0`}
                      ></span>
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
);

export default ObjectivesSection;
