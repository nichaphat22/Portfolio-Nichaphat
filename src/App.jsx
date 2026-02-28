import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certification from "./components/Certification";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.7,
      },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light");

  useEffect(() => {
    localStorage.setItem("mode", theme);

    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} activeSection={activeSection} />

      <main className="mt-10 h-screen overflow-y-scroll snap-y snap-mandatory">
        <section id="home" className="h-screen  snap-start">
          <Home />
        </section>

        <section id="about" className="h-screen snap-start">
          <AboutMe />
        </section>

        <section id="project" className="h-screen snap-start">
          <Projects/>
        </section>

        <section id="skills" className="h-screen snap-start">
          <Skills/>
        </section>

        <section id="certification" className="h-screen snap-start">
          <Certification/>
        </section>

        <section id="contact" className="h-screen snap-start">
          <Contact/>
        </section>
      </main>
    </>
  );
}

export default App;
