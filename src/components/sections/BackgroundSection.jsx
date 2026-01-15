import React, { useState } from "react";

const BackgroundSection = () => {
  const [showFullBackground, setShowFullBackground] = useState(false);

  return (
    <section className="slide-up space-y-6">
      <div className="glass rounded-3xl p-8 section-card">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📖</span>
          <h2 className="text-2xl font-bold text-slate-800">
            ความเป็นมา หลักการและเหตุผล
          </h2>
        </div>

        {/* Abstract */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 mb-6 border-l-4 border-teal-500">
          <h3 className="font-bold text-teal-800 mb-4 flex items-center gap-2">
            <span>📝</span> บทคัดย่อ
          </h3>
          <p className="text-slate-700 leading-relaxed text-sm md:text-base">
            โรคสมาธิสั้น (ADHD) พบได้{" "}
            <strong className="text-teal-700">ร้อยละ 8.1</strong>{" "}
            ในเด็กนักเรียนประถมของไทย หรือประมาณ{" "}
            <strong className="text-teal-700">1 ล้านคน</strong>{" "}
            แต่เด็กจำนวนมากไม่ได้รับการวินิจฉัย
            เนื่องจากขาดระบบคัดกรองเชิงรุก ยา Concerta
            ที่เหมาะกับเด็กวัยเรียนยังไม่อยู่ในบัญชียาหลัก
            ทำให้ครอบครัวต้องจ่ายเอง{" "}
            <strong className="text-rose-600">3,500-8,000 บาท/เดือน</strong>
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
          <span>
            {showFullBackground
              ? "📖 ซ่อนความเป็นมาฉบับเต็ม"
              : "📚 อ่านความเป็นมาฉบับเต็ม"}
          </span>
          <span className={`transition-transform ${showFullBackground ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {/* Full Background Content */}
        <div className={`expand-content ${showFullBackground ? "open" : ""}`}>
          <div className="mt-6 space-y-6">
            {/* โรคสมาธิสั้น */}
            <div className="bg-rose-50 rounded-2xl p-6 border-l-4 border-rose-400">
              <h4 className="font-bold text-rose-800 mb-3 flex items-center gap-2">
                <span>🧠</span> โรคสมาธิสั้น
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                โรคสมาธิสั้น (ADHD) เป็นความผิดปกติทางพัฒนาการระบบประสาท
                ที่มีลักษณะเด่นคือ อาการขาดสมาธิ (inattention) อยู่ไม่นิ่ง
                (hyperactivity) และหุนหันพลันแล่น (impulsivity) ตามเกณฑ์
                DSM-5 อาการจะปรากฏก่อนอายุ 12 ปี และวินิจฉัยได้ตั้งแต่อายุ
                6 ปีขึ้นไป
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                การศึกษาโดย ทวีศิลป์ วิษณุโยธิน และคณะ (2556)
                พบความชุกร้อยละ 8.1 ในเด็ก ป.1-5
                แต่ประเทศไทยไม่มีระบบคัดกรองเชิงรุก
                ทำให้เด็กจำนวนมากไม่ได้รับการวินิจฉัย ทั้งที่มีเครื่องมือ
                SNAP-IV ฉบับภาษาไทยที่ผ่านการทดสอบแล้ว
              </p>
            </div>

            {/* วิธีการรักษา */}
            <div className="bg-amber-50 rounded-2xl p-6 border-l-4 border-amber-400">
              <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                <span>💊</span> วิธีการรักษา
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                หลักฐานยืนยันว่า ADHD จำเป็นต้องรักษาด้วยยา
                (pharmacotherapy) เป็นหลัก โดย methylphenidate
                เป็นยาที่มีประสิทธิภาพสูงสุดสำหรับเด็กและวัยรุ่น
              </p>
              <div className="bg-white/80 rounded-xl p-4">
                <h5 className="font-semibold text-amber-700 mb-2">
                  เปรียบเทียบ Concerta vs Ritalin
                </h5>
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
                  <div className="text-teal-600">ไม่จำเป็น</div>
                  <div className="text-rose-600">จำเป็น</div>

                  <div>บัญชียาหลัก</div>
                  <div className="text-rose-600">ไม่อยู่</div>
                  <div className="text-teal-600">อยู่</div>

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
                อุปสรรคสำคัญคือ &quot;ความไม่รู้&quot; และ &quot;ความกลัว&quot;
                ผู้ปกครองบางส่วนมองว่าเป็นโรคน่ากลัว จึงไม่พามาพบแพทย์
                วัฒนธรรมไทยที่เน้นความเชื่อฟังทำให้เด็ก ADHD ถูกมองว่า
                &quot;ดื้อ&quot; &quot;ไม่มีมารยาท&quot;
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/80 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-600">52%</div>
                  <div className="text-sm text-slate-600">
                    เด็ก ADHD ถูกเพื่อนปฏิเสธ (vs 14% ในเด็กทั่วไป)
                  </div>
                </div>
                <div className="bg-white/80 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-600">2.8 เท่า</div>
                  <div className="text-sm text-slate-600">
                    เด็กที่ถูกครูลงโทษมีโอกาสเป็น ADHD
                  </div>
                </div>
              </div>
            </div>

            {/* ผลกระทบ */}
            <div className="bg-slate-100 rounded-2xl p-6 border-l-4 border-slate-400">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span>⚠️</span> ผลกระทบของโรค
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                เด็ก ADHD มักมีโรคร่วมสูงถึง 53.5% โดยเฉพาะวิตกกังวล
                ซึมเศร้า และโรคดื้อต่อต้าน หากไม่รักษา
                มีโอกาสเป็นเด็กมีปัญหา 3-4 เท่า ติดสารเสพติด
                และเข้าสู่ระบบยุติธรรม
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
