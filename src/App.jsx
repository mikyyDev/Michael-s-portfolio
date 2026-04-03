import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import AchievementsStrip from "./components/sections/AchievementsStrip";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import useScrollReveal from "./hooks/useScrollReveal";
import {
  aboutData,
  achievements,
  contactData,
  heroData,
  navLinks,
  navbarQuickLinks,
  projects,
  skills,
  skillsSummary,
  socials,
} from "./data/portfolioData";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useScrollReveal(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <>
      <Navbar
        links={navLinks}
        quickLinks={navbarQuickLinks}
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
        onCloseMenu={closeMenu}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero hero={heroData} />
        <AchievementsStrip items={achievements} />
        <About about={aboutData} />
        <Skills skills={skills} summary={skillsSummary} />
        <Projects projects={projects} />
        <Contact socials={socials} contact={contactData} />
      </main>

      <Footer socials={socials} />
    </>
  );
}

export default App;
