import Icon from "../../utils/Icon";
import { teamMembers } from "../../data/sections";

const TeamSection = () => (
  <section>
    <div className="card-hero">
      <div className="hero-icon">
        <Icon name="users" />
      </div>
      <div className="eyebrow-text">ชื่อทีม</div>
      <div className="team-wordmark">A Dee H Dee</div>
      <div className="team-pron">(อะดี... เฮ็ดดี...)</div>

      <div className="team-list-label">สมาชิกในทีม</div>
      <div className="team-grid">
        {teamMembers.map((m) => (
          <div className="member-card" key={m.photo}>
            <div className="avatar">
              <img
                src={`${import.meta.env.BASE_URL}assets/${m.photo}`}
                alt={m.name}
              />
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

export default TeamSection;
