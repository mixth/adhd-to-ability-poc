import React from "react";
import { partners } from "../../../data/partners";

const Partners = () => (
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
          <span className="font-medium text-violet-800 text-sm">
            {partner.name}
          </span>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
            {partner.desc}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4 text-center text-sm text-slate-500">
      <strong>นำเสนอต่อ:</strong> คณะอนุกรรมการ NLEM •
      กระทรวงสาธารณสุข • กรมสุขภาพจิต • กระทรวงศึกษาธิการ
    </div>
  </div>
);

export default Partners;
