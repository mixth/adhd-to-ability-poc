import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { personas, assetUrl } from "../../data/personas";

// Home-page entry point to the project's main output: the policy brief,
// the quiz and the persona stories.
const PolicyBriefBanner = () => (
  <section className="fx-banner" aria-labelledby="fx-banner-title">
    <div className="fx-banner-text">
      <span className="fx-eyebrow">ผลงานหลักของโครงการ · POLICY BRIEF</span>
      <h2 id="fx-banner-title">ADHD: สิทธิยาที่ดีกว่าเพื่อคุณภาพชีวิตที่ดีขึ้นของเด็กสมาธิสั้น</h2>
      <p>
        ข้อเสนอนโยบายให้เด็ก ADHD ไทยมีทางเลือกในการรักษา ด้วยการนำยา Concerta เข้าสู่บัญชียาหลักแห่งชาติ
        และลดการตีตราในสังคม
      </p>
      <div className="fx-btn-row">
        <Link to="/quiz" className="fx-btn fx-btn-purple fx-btn-lg">
          ทดสอบความรู้เท่าทัน ADHD <ArrowRight aria-hidden="true" />
        </Link>
        <Link to="/policy-brief" className="fx-btn fx-btn-outline fx-btn-lg">
          อ่าน Policy Brief
        </Link>
      </div>
    </div>
    <Link to="/personas" className="fx-banner-people">
      <div className="fx-banner-faces">
        {personas.map((p) => (
          <img key={p.id} src={assetUrl(p.img)} alt={p.name} style={{ objectPosition: p.pos }} />
        ))}
      </div>
      <span>อ่านเรื่องราวจริงของภูมิ แม่ปราง ฟ้า และภพ →</span>
    </Link>
  </section>
);

export default PolicyBriefBanner;
