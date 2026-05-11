import Icon from "../../utils/Icon";

const PROJECT_KEYWORDS = ["ตรวจเร็ว", "รู้ไว", "ไร้ตรา", "เด็กกล้าโต"];

const ProjectNameSection = () => (
  <section>
    <div className="card-hero">
      <div className="hero-icon">
        <Icon name="clipboard-list" />
      </div>
      <div className="eyebrow-text">ชื่อโครงการ</div>
      <h3 className="project-name-display">ADHD to Ability</h3>
      <div className="project-keywords">
        {PROJECT_KEYWORDS.map((k) => (
          <span className="keyword-chip" key={k}>
            {k}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectNameSection;
