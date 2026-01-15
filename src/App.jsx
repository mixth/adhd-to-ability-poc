import React, { useState, useEffect, useRef } from "react";
import FrameworkImageModal from "./components/modals/FrameworkImageModal";

// Styles
import GlobalStyles from "./styles/GlobalStyles";

// Layout Components
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Pagination from "./components/layout/Pagination";
import Footer from "./components/layout/Footer";

// Background Components
import AnimatedBackground from "./components/background/AnimatedBackground";

// Section Components
import TeamSection from "./components/sections/TeamSection";
import ProjectNameSection from "./components/sections/ProjectNameSection";
import BackgroundSection from "./components/sections/BackgroundSection";
import FrameworkSection from "./components/sections/FrameworkSection";
import ObjectivesSection from "./components/sections/ObjectivesSection";
import LongTermGoalsSection from "./components/sections/LongTermGoalsSection";

// Data
import { sections } from "./data/sections";

const ADHDProposal = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showFrameworkModal, setShowFrameworkModal] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 1:
        return <TeamSection />;
      case 2:
        return <ProjectNameSection />;
      case 3:
        return <BackgroundSection />;
      case 4:
        return (
          <FrameworkSection
            onOpenFullFramework={() => setShowFrameworkModal(true)}
          />
        );
      case 5:
        return <ObjectivesSection />;
      case 6:
        return <LongTermGoalsSection />;
      default:
        return <TeamSection />;
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative overflow-hidden"
      style={{ fontFamily: "'Google Sans', sans-serif" }}
    >
      <GlobalStyles />
      <AnimatedBackground mousePos={mousePos} />

      <div className="relative z-10 p-8 md:p-16 max-w-7xl mx-auto">
        <Header loaded={loaded} />

        <Navigation
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {renderActiveSection()}

        <Pagination
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <Footer />
      </div>

      {/* Framework Full Image Modal */}
      <FrameworkImageModal
        isOpen={showFrameworkModal}
        onClose={() => setShowFrameworkModal(false)}
      />
    </div>
  );
};

export default ADHDProposal;
