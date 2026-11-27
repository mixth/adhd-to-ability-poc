import Icon from "../../utils/Icon";
import { teamMembers } from "../../data/sections";

const PROJECT_KEYWORDS = ["ตรวจเร็ว", "รู้ไว", "ไร้ตรา", "เด็กกล้าโต"];

// "เกี่ยวกับเรา": the project name and the team, on one page.
const AboutSection = () => (
  <section>
    <div className="card-hero">
      <div className="hero-icon">
        <Icon name="users" />
      </div>
      <div className="eyebrow-text">เกี่ยวกับเรา</div>

      <div className="about-grid">
        <div className="about-card">
          <span className="about-label">ชื่อโครงการ</span>
          <span className="about-project">ADHD to Ability</span>
          <div className="project-keywords">
            {PROJECT_KEYWORDS.map((k) => (
              <span className="keyword-chip" key={k}>
                {k}
              </span>
            ))}
          </div>
          <p className="about-desc">
            โครงการย่อยในหมวดสุขภาพจิต ภายใต้ Young Policy Makers #2 ร่วมกับมูลนิธิเข้าถึงเอดส์ และ สสส.
          </p>
        </div>
        <div className="about-card">
          <span className="about-label">ชื่อทีม</span>
          <div className="team-wordmark about-wordmark">A Dee H Dee</div>
          <div className="team-pron about-pron">(อะดี... เฮ็ดดี...)</div>
        </div>
      </div>

      <div className="team-list-label">สมาชิกในทีม</div>
      <div className="team-grid">
        {teamMembers.map((m) => (
          <div className="member-card" key={m.photo}>
            <div className="avatar">
              <img src={`${import.meta.env.BASE_URL}assets/${m.photo}`} alt={m.name} />
            </div>
            <div className="member-title">{m.title}</div>
            <div className="member-name">{m.name}</div>
            <div className="member-nick">({m.nickname})</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
