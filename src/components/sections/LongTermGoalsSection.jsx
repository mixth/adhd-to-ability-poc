import Icon from "../../utils/Icon";

const LongTermGoalsSection = () => (
  <section>
    <div className="card-default">
      <div className="section-head">
        <div className="head-icon">
          <Icon name="target" />
        </div>
        <h2>เป้าประสงค์ เป้าหมายระยะยาว</h2>
      </div>

      <div className="goals-aspiration">
        <p>
          เด็กไทยที่มีภาวะสมาธิสั้น (ADHD) <strong>ทุกคน</strong> ได้รับการคัดกรอง วินิจฉัย และเข้าถึงการรักษาที่มีประสิทธิภาพอย่างเท่าเทียม โดยปราศจากอุปสรรคด้านตราบาปทางสังคมและข้อจำกัดด้านค่าใช้จ่าย ส่งผลให้เด็ก ADHD สามารถพัฒนาศักยภาพได้เต็มที่ มีคุณภาพชีวิตที่ดี และเติบโตเป็นพลเมืองที่มีส่วนร่วมในการพัฒนาประเทศ
        </p>
      </div>

      <div className="vision-card">
        <div className="v-label">วิสัยทัศน์</div>
        <div className="v-tagline">&quot;ตรวจเร็ว รู้ไว ไร้ตรา เด็กกล้าโต&quot;</div>
        <div className="v-en">ค้นพบเร็ว ไม่มีตราบาป เด็กเติบโตอย่างมั่นใจ</div>
      </div>
    </div>
  </section>
);

export default LongTermGoalsSection;
