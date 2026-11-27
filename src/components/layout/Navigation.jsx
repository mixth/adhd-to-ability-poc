import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../utils/Icon";
import { sectionPath } from "../../data/sections";

const Navigation = forwardRef(function Navigation({ sections }, ref) {
  return (
    <nav className="section-nav" ref={ref} aria-label="หมวดในเว็บ">
      {sections.map((s) => (
        <NavLink
          key={s.id}
          to={sectionPath(s.slug)}
          end
          className={({ isActive }) =>
            "nav-item" + (s.featured ? " nav-item-gold" : "") + (isActive ? " active" : "")
          }
          title={s.title}
        >
          <Icon name={s.icon} />
          <span className="nav-label-full">{s.title}</span>
          <span className="nav-label-short">{s.short}</span>
        </NavLink>
      ))}
    </nav>
  );
});

export default Navigation;
