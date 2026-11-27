import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

import Footer from "./components/layout/Footer";
import JinglePlayer from "./components/layout/JinglePlayer";
import PageBackground from "./components/layout/PageBackground";

// Shared shell for the quiz, policy brief and personas pages: logo back to
// the home page plus a small menu between the three.
export const FEATURE_LINKS = [
  { to: "/quiz", label: "จริง หรือ เค้ก?" },
  { to: "/policy-brief", label: "ข้อเสนอนโยบาย" },
  { to: "/personas", label: "เรื่องของพวกเขา" },
];

const FeatureLayout = () => {
  const { pathname, hash } = useLocation();

  // New page → top; a #hash (e.g. /policy-brief#gap) → that section.
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <PageBackground />
      <div className="page fx-page">
        <header className="fx-header">
          <Link to="/" className="fx-logo-link" aria-label="ADHD to Ability หน้าแรก">
            <img
              src={`${import.meta.env.BASE_URL}assets/logo-vertical-cropped.png`}
              alt="ADHD to Ability หน้าแรก"
            />
          </Link>
          <nav className="fx-subnav" aria-label="ข้อเสนอนโยบายและควิซ">
            {FEATURE_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end
                className={({ isActive }) => "fx-subnav-item" + (isActive ? " active" : "")}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </header>
        <div className="screen-wrap" key={pathname}>
          <Outlet />
        </div>
        <Footer />
      </div>
      <JinglePlayer />
    </>
  );
};

export default FeatureLayout;
