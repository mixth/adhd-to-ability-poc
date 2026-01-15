import React from "react";

const PROBLEMS = [
  {
    icon: "🔍",
    text: "การขาดระบบคัดกรอง ADHD ในเด็กประถม",
    color: "rose",
  },
  {
    icon: "💊",
    text: "ความไม่เท่าเทียมในการเข้าถึงยาที่มีประสิทธิภาพ",
    color: "amber",
  },
  {
    icon: "🏷️",
    text: "ตราบาปทางสังคมที่ทำให้ผู้ปกครองปฏิเสธการรักษา",
    color: "purple",
  },
];

const CAMPAIGNS = ["Social Media", "School Campaign", "Community Event"];
const CAMPAIGN_ICONS = ["📱", "🏫", "🎪"];

const TwoPillarsStrategy = ({ activeFramework, setActiveFramework }) => (
  <>
    {/* Problems */}
    <div className="mb-8">
      <h3 className="font-bold text-slate-700 mb-4">
        ประเด็นปัญหาที่ต้องการขับเคลื่อน
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        {PROBLEMS.map((item, i) => (
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
            activeFramework === "pillar1"
              ? "border-rose-400 ring-4 ring-rose-200"
              : "border-rose-200"
          }`}
          onClick={() =>
            setActiveFramework(activeFramework === "pillar1" ? null : "pillar1")
          }
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
                <div className="font-semibold text-rose-800">
                  ข้อเสนอนโยบาย Concerta
                </div>
                <div className="text-sm text-slate-600">
                  นำเสนอต่อคณะอนุกรรมการ NLEM
                </div>
              </div>
            </div>
            <div className="bg-white/80 rounded-xl p-4 flex items-start gap-3">
              <span className="text-2xl">🔍</span>
              <div>
                <div className="font-semibold text-rose-800">
                  ข้อเสนอนโยบายคัดกรอง
                </div>
                <div className="text-sm text-slate-600">
                  Research + Interview → นำเสนอต่อ กระทรวงสาธารณสุข
                  และกระทรวงศึกษาธิการ
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 2 */}
        <div
          className={`bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 cursor-pointer card-3d border-2 ${
            activeFramework === "pillar2"
              ? "border-teal-400 ring-4 ring-teal-200"
              : "border-teal-200"
          }`}
          onClick={() =>
            setActiveFramework(activeFramework === "pillar2" ? null : "pillar2")
          }
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
            {CAMPAIGNS.map((camp, i) => (
              <div
                key={i}
                className="bg-white/80 rounded-xl p-3 flex items-center gap-3"
              >
                <span className="text-xl">{CAMPAIGN_ICONS[i]}</span>
                <span className="font-medium text-teal-800">{camp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default TwoPillarsStrategy;
