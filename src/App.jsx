import About from "./About";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import "animate.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
