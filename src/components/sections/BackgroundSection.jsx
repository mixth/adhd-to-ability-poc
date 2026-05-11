import { useState } from "react";
import Icon from "../../utils/Icon";

const BackgroundSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div className="card-default">
        <div className="section-head">
          <div className="head-icon">
            <Icon name="book-open" />
          </div>
          <h2>ความเป็นมา หลักการและเหตุผล</h2>
        </div>

        <div className="abstract-block">
          <div className="abstract-head">
            <Icon name="file-text" /> บทคัดย่อ
          </div>
          <p className="abstract-body">
            โรคสมาธิสั้น (ADHD) พบได้{" "}
            <strong className="h-purple">ร้อยละ 8.1</strong>{" "}
            ในเด็กนักเรียนประถมของไทย หรือประมาณ{" "}
            <strong className="h-purple">1 ล้านคน</strong>{" "}
            แต่เด็กจำนวนมากไม่ได้รับการวินิจฉัย เนื่องจากขาดระบบคัดกรองเชิงรุก ยา Concerta ที่เหมาะกับเด็กวัยเรียนยังไม่อยู่ในบัญชียาหลัก ทำให้ครอบครัวต้องจ่ายเอง{" "}
            <strong className="h-danger">3,500-8,000 บาท/เดือน</strong>
          </p>
          <div className="stat-row">
            <div className="stat-block stat-feature">
              <div className="stat stat-purple">6.5–11 ปี</div>
              <div className="stat-label">อายุขัยสั้นกว่าคนทั่วไป</div>
            </div>
            <div className="stat-block stat-gold-bg">
              <div className="stat stat-gold">25–40%</div>
              <div className="stat-label">ของผู้ต้องขังมี ADHD</div>
            </div>
            <div className="stat-block">
              <div className="stat stat-ink">2–5 หมื่นล้าน</div>
              <div className="stat-label">บาท/ปี ต้นทุนสังคม</div>
            </div>
          </div>
        </div>

        <button
          className={"expand-toggle" + (open ? " open" : "")}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "book" : "book-open-text"} />
          <span>{open ? "ซ่อนความเป็นมาฉบับเต็ม" : "อ่านความเป็นมาฉบับเต็ม"}</span>
          <Icon name="chevron-down" />
        </button>

        <div className={"expand-content" + (open ? " open" : "")}>
          <div className="detail-card">
            <div className="detail-card-head">
              <div className="icon-chip icon-chip-purple">
                <Icon name="brain" />
              </div>
              <h4>โรคสมาธิสั้น</h4>
            </div>
            <p>
              โรคสมาธิสั้น (ADHD) เป็นความผิดปกติทางพัฒนาการระบบประสาท ที่มีลักษณะเด่นคือ อาการขาดสมาธิ (inattention) อยู่ไม่นิ่ง (hyperactivity) และหุนหันพลันแล่น (impulsivity) ตามเกณฑ์ DSM-5 อาการจะปรากฏก่อนอายุ 12 ปี และวินิจฉัยได้ตั้งแต่อายุ 6 ปีขึ้นไป
            </p>
            <p>
              การศึกษาโดย ทวีศิลป์ วิษณุโยธิน และคณะ (2556) พบความชุกร้อยละ 8.1 ในเด็ก ป.1-5 แต่ประเทศไทยไม่มีระบบคัดกรองเชิงรุก ทำให้เด็กจำนวนมากไม่ได้รับการวินิจฉัย ทั้งที่มีเครื่องมือ SNAP-IV ฉบับภาษาไทยที่ผ่านการทดสอบแล้ว
            </p>
          </div>

          <div className="detail-card">
            <div className="detail-card-head">
              <div className="icon-chip icon-chip-gold">
                <Icon name="pill" />
              </div>
              <h4>วิธีการรักษา</h4>
            </div>
            <p>
              หลักฐานยืนยันว่า ADHD จำเป็นต้องรักษาด้วยยา (pharmacotherapy) เป็นหลัก โดย methylphenidate เป็นยาที่มีประสิทธิภาพสูงสุดสำหรับเด็กและวัยรุ่น
            </p>
            <div className="compare-table">
              <h5>เปรียบเทียบ Concerta vs Ritalin</h5>
              <div className="compare-grid">
                <div className="ch">ประเด็น</div>
                <div className="ch ch-c">Concerta</div>
                <div className="ch ch-r">Ritalin</div>
                <div className="row-label">ระยะออกฤทธิ์</div>
                <div className="row-good">10-12 ชม.</div>
                <div className="row-bad">3-4 ชม.</div>
                <div className="row-label">รับประทาน</div>
                <div className="row-good">1 ครั้ง/วัน</div>
                <div className="row-bad">2-3 ครั้ง/วัน</div>
                <div className="row-label">ให้ยาที่โรงเรียน</div>
                <div className="row-good">ไม่จำเป็น</div>
                <div className="row-bad">จำเป็น</div>
                <div className="row-label">บัญชียาหลัก</div>
                <div className="row-bad">ไม่อยู่</div>
                <div className="row-good">อยู่</div>
                <div className="row-label">ค่าใช้จ่าย/เดือน</div>
                <div className="row-bad">3,500-8,000฿</div>
                <div className="row-good">เบิกได้</div>
              </div>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-card-head">
              <div className="icon-chip icon-chip-purple">
                <Icon name="tag" />
              </div>
              <h4>ตราบาปของโรค</h4>
            </div>
            <p>
              อุปสรรคสำคัญคือ &quot;ความไม่รู้&quot; และ &quot;ความกลัว&quot; ผู้ปกครองบางส่วนมองว่าเป็นโรคน่ากลัว จึงไม่พามาพบแพทย์ วัฒนธรรมไทยที่เน้นความเชื่อฟังทำให้เด็ก ADHD ถูกมองว่า &quot;ดื้อ&quot; &quot;ไม่มีมารยาท&quot;
            </p>
            <div className="mini-stat-row">
              <div className="mini-stat">
                <div className="n">52%</div>
                <div className="l">เด็ก ADHD ถูกเพื่อนปฏิเสธ (vs 14% ในเด็กทั่วไป)</div>
              </div>
              <div className="mini-stat">
                <div className="n">2.8 เท่า</div>
                <div className="l">เด็กที่ถูกครูลงโทษมีโอกาสเป็น ADHD</div>
              </div>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-card-head">
              <div className="icon-chip icon-chip-warning">
                <Icon name="alert-triangle" />
              </div>
              <h4>ผลกระทบของโรค</h4>
            </div>
            <p>
              เด็ก ADHD มักมีโรคร่วมสูงถึง 53.5% โดยเฉพาะวิตกกังวล ซึมเศร้า และโรคดื้อต่อต้าน หากไม่รักษา มีโอกาสเป็นเด็กมีปัญหา 3-4 เท่า ติดสารเสพติด และเข้าสู่ระบบยุติธรรม
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
