import "animate.css";
import About from "./About";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Tribute from "./Tribute";
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
      <Tribute />
      <Footer />
    </div>
  );
};

export default App;
