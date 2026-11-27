import Layout from "./Layout";
import FeatureLayout from "./FeatureLayout";

import AboutSection from "./components/sections/AboutSection";
import BackgroundSection from "./components/sections/BackgroundSection";
import LongTermGoalsSection from "./components/sections/LongTermGoalsSection";
import ContactSection from "./components/sections/ContactSection";

import QuizPage from "./components/pages/QuizPage";
import PolicyBriefPage from "./components/pages/PolicyBriefPage";
import PersonasPage from "./components/pages/PersonasPage";

// Keep paths in sync with the `slug` values in ./data/sections.js.
// FrameworkSection and ObjectivesSection are no longer in the menu
// (5-tab redesign); their files are kept in components/sections.
export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <AboutSection /> },
      { path: "background", element: <BackgroundSection /> },
      { path: "long-term-goals", element: <LongTermGoalsSection /> },
      { path: "contact", element: <ContactSection /> },
    ],
  },
  // Policy brief, quiz and personas share their own lighter shell.
  {
    element: <FeatureLayout />,
    children: [
      { path: "/quiz", element: <QuizPage /> },
      { path: "/policy-brief", element: <PolicyBriefPage /> },
      { path: "/personas", element: <PersonasPage /> },
    ],
  },
];
