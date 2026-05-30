import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../utils/Icon";
import { sectionPath } from "../../data/sections";

const Navigation = forwardRef(function Navigation({ sections }, ref) {
  return (
    <nav className="section-nav" ref={ref}>
      {sections.map((s) => (
        <NavLink
          key={s.id}
          to={sectionPath(s.slug)}
          end
          className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
          title={s.title}
        >
          <Icon name={s.icon} />
          <span>{s.title}</span>
        </NavLink>
      ))}
    </nav>
  );
});

export default Navigation;
