import Icon from "../../../utils/Icon";
import { policyDetails } from "../../../data/policyDetails";

const PolicyOverlay = ({ id, onClose }) => {
  const d = policyDetails[id];
  if (!d) return null;

  return (
    <div className="overlay-root">
      <div className="overlay-backdrop" onClick={onClose}></div>
      <div className="overlay-card">
        <button className="overlay-close" onClick={onClose} aria-label="ปิด">
          ✕
        </button>
        <div className="overlay-head">
          <div className={`icon-chip icon-chip-${d.tone}`}>
            <Icon name={d.icon} />
          </div>
          <h3>{d.title}</h3>
        </div>
        {d.iconed ? (
          <ul className="overlay-list">
            {d.iconed.map((p) => (
              <li key={p.text}>
                <span className="li-ico">
                  <Icon name={p.icon} />
                </span>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="overlay-list">
            {d.points.map((p) => (
              <li key={p}>
                <span className="dot"></span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PolicyOverlay;
