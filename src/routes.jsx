import Layout from "./Layout";

import TeamSection from "./components/sections/TeamSection";
import ProjectNameSection from "./components/sections/ProjectNameSection";
import BackgroundSection from "./components/sections/BackgroundSection";
import FrameworkSection from "./components/sections/FrameworkSection";
import ObjectivesSection from "./components/sections/ObjectivesSection";
import LongTermGoalsSection from "./components/sections/LongTermGoalsSection";
import ContactSection from "./components/sections/ContactSection";

// One static page per section. Keep paths in sync with the `slug`
// values in ./data/sections.js.
export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <TeamSection /> },
      { path: "project-name", element: <ProjectNameSection /> },
      { path: "background", element: <BackgroundSection /> },
      { path: "framework", element: <FrameworkSection /> },
      { path: "objectives", element: <ObjectivesSection /> },
      { path: "long-term-goals", element: <LongTermGoalsSection /> },
      { path: "contact", element: <ContactSection /> },
    ],
  },
];
