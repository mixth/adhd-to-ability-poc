import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Pagination from "./components/layout/Pagination";
import Footer from "./components/layout/Footer";
import JinglePlayer from "./components/layout/JinglePlayer";
import PageBackground from "./components/layout/PageBackground";
import PolicyBriefBanner from "./components/sections/PolicyBriefBanner";

import { sections } from "./data/sections";

const Layout = () => {
  const location = useLocation();
  const navRef = useRef(null);
  const mounted = useRef(false);

  const slug = location.pathname.replace(/^\/+|\/+$/g, "");
  const activeSection =
    sections.find((s) => s.slug === slug)?.id ?? sections[0].id;

  // Smooth-scroll up to the nav on navigation, but not on the initial load
  // (or hydration), so deep-linking to a section doesn't yank the page.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        navRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }, [location.pathname]);

  return (
    <>
      <PageBackground />
      <div className="page">
        <Header />
        <Navigation ref={navRef} sections={sections} active={activeSection} />
        {slug === "" && <PolicyBriefBanner />}
        <div className="screen-wrap" key={location.pathname}>
          <Outlet />
        </div>
        <Pagination sections={sections} active={activeSection} />
        <Footer />
      </div>
      <JinglePlayer />
    </>
  );
};

export default Layout;
