import Icon from "../../utils/Icon";

const Header = () => (
  <header className="a2a-header">
    <span className="eyebrow-pill">
      <Icon name="sparkles" />
      Young Policy Makers #2
    </span>
    <img
      style={{ paddingLeft: 24 }}
      className="brand-logo"
      src={`${import.meta.env.BASE_URL}assets/logo-vertical-cropped.png`}
      alt="ADHD to Ability"
    />
    <p className="subhead">
      ข้อเสนอโครงการย่อย ภายใต้โครงการพัฒนาต้นแบบการสนับสนุนคนรุ่นใหม่
      <br />
      ให้สร้างนโยบายสาธารณะเพื่อสุขภาวะเด็ก เยาวชน และครอบครัว
    </p>
    <div className="header-tags">
      <span className="tag tag-brand">
        <Icon name="heart" /> หมวด: สุขภาพจิต
      </span>
    </div>
  </header>
);

export default Header;
