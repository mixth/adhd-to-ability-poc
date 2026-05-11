import { forwardRef } from "react";
import Icon from "../../utils/Icon";

const Navigation = forwardRef(function Navigation(
  { sections, active, onChange },
  ref,
) {
  return (
    <nav className="section-nav" ref={ref}>
      {sections.map((s) => (
        <button
          key={s.id}
          className={"nav-item" + (active === s.id ? " active" : "")}
          onClick={() => onChange(s.id)}
          title={s.title}
        >
          <Icon name={s.icon} />
          <span>{s.title}</span>
        </button>
      ))}
    </nav>
  );
});

export default Navigation;
