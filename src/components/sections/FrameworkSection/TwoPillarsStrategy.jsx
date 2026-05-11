import Icon from "../../../utils/Icon";

const TwoPillarsStrategy = ({ activePillar, onTogglePillar }) => {
  const toggle = (id) => onTogglePillar(activePillar === id ? null : id);

  return (
    <div className="pillars-grid">
      <div
        className={"pillar-big" + (activePillar === "p1" ? " active" : "")}
        onClick={() => toggle("p1")}
      >
        <div className="pillar-row">
          <span className="pillar-tag">
            <Icon name="target" /> เสา 1: Policy Push
          </span>
        </div>
        <div className="pillar-item">
          <div className="pillar-item-icon">
            <Icon name="pill" />
          </div>
          <div>
            <div className="pillar-item-title">ข้อเสนอนโยบาย Concerta</div>
            <div className="pillar-item-desc">นำเสนอต่อคณะอนุกรรมการ NLEM</div>
          </div>
        </div>
      </div>

      <div
        className={"pillar-big gold" + (activePillar === "p2" ? " active" : "")}
        onClick={() => toggle("p2")}
      >
        <div className="pillar-row">
          <span className="pillar-tag pillar-tag-gold">
            <Icon name="megaphone" /> เสา 2: Social Campaign
          </span>
          <span className="pillar-meta">
            <Icon name="refresh-cw" /> หนุนเสริม Policy
          </span>
        </div>
        <div className="pillar-item">
          <div className="pillar-item-icon">
            <Icon name="smartphone" />
          </div>
          <div>
            <div className="pillar-item-title">Social Media</div>
          </div>
        </div>
        <div className="pillar-item">
          <div className="pillar-item-icon">
            <Icon name="school" />
          </div>
          <div>
            <div className="pillar-item-title">School Campaign</div>
          </div>
        </div>
        <div className="pillar-item">
          <div className="pillar-item-icon">
            <Icon name="party-popper" />
          </div>
          <div>
            <div className="pillar-item-title">Community Event</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoPillarsStrategy;
