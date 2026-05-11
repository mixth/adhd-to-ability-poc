import { useState, useRef } from "react";

import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Pagination from "./components/layout/Pagination";
import Footer from "./components/layout/Footer";

import TeamSection from "./components/sections/TeamSection";
import ProjectNameSection from "./components/sections/ProjectNameSection";
import BackgroundSection from "./components/sections/BackgroundSection";
import FrameworkSection from "./components/sections/FrameworkSection";
import ObjectivesSection from "./components/sections/ObjectivesSection";
import LongTermGoalsSection from "./components/sections/LongTermGoalsSection";

import { sections } from "./data/sections";

const SCREENS = {
  1: TeamSection,
  2: ProjectNameSection,
  3: BackgroundSection,
  4: FrameworkSection,
  5: ObjectivesSection,
  6: LongTermGoalsSection,
};

const App = () => {
  const [activeSection, setActiveSection] = useState(1);
  const navRef = useRef(null);

  const navigate = (id) => {
    setActiveSection(id);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        navRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  const ActiveScreen = SCREENS[activeSection] ?? TeamSection;

  return (
    <>
      <div className="page-bg" />
      <div className="page">
        <Header />
        <Navigation
          ref={navRef}
          sections={sections}
          active={activeSection}
          onChange={setActiveSection}
        />
        <div className="screen-wrap" key={activeSection}>
          <ActiveScreen />
        </div>
        <Pagination
          sections={sections}
          active={activeSection}
          onNavigate={navigate}
        />
        <Footer />
      </div>
    </>
  );
};

export default App;
