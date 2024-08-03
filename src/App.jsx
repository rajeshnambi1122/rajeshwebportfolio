import About from "./About";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import "animate.css";
import Footer from "./Footer";
import { useRef } from "react";

const App = () => {
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <Header />
      <Hero
        skillsRef={skillsRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        educationRef={educationRef}
        scrollToSection={scrollToSection}
      />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Education educationRef={educationRef} />
      <Footer />
    </div>
  );
};

export default App;
