import React from "react";
import SLstudio from "./SLstudio.png";
import Keeper from "./Keeper.png";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

const Projects = ({ projectsRef }) => {
  return (
    <div>
      <h1>My Projects</h1>
      <div ref={projectsRef} className="projects">
        <div className="projectbox">
          <img className="projectimage" src={SLstudio} alt="SL Studio"></img>
          <h2 className="projectname">SL Studio</h2>
          <p style={{ padding: "5px" }}>
            Designed and developed a responsive website for SL Studio using
            HTML, CSS, and JavaScript. Created an attractive portfolio showcase
            and detailed service information sections.Ensured cross-browser
            compatibility and seamless user experience across
            devices.Implemented a user-friendly website to facilitate client
            inquiries.
          </p>
          <p
            style={{
              fontSize: "20px",
              display: "inline-block",
              marginRight: "20px",
              marginLeft: "5px",
              textDecoration: "underline",
            }}
          >
            <FaGithub />{" "}
            <a href="https://github.com/rajeshnambi1122/SLstudio">Code</a>
          </p>
          <p
            style={{
              display: "inline-block",
              fontSize: "20px",
              textDecoration: "underline",
            }}
          >
            <a href="https://slstudio.netlify.app/">Live</a>
          </p>
          <GoLinkExternal />
        </div>
        <div className="projectbox">
          <img className="projectimage" src={Keeper} alt="Keeper"></img>
          <h2 className="projectname">Keeper</h2>
          <p style={{ padding: "5px" }}>
            Developed a responsive note-taking app using React and Vite,
            allowing users to create, view, and delete notes. Implemented a
            clean and intuitive user interface with real-time note management
            and dynamic updates. Demonstrated proficiency in modern frontend
            frameworks and tools, enhancing coding skills and understanding of
            React's ecosystem.
          </p>
          <p
            style={{
              fontSize: "20px",
              display: "inline-block",
              marginRight: "20px",
              marginLeft: "5px",
              textDecoration: "underline",
            }}
          >
            <FaGithub />{" "}
            <a href="https://github.com/rajeshnambi1122/keeper-vire">Code</a>
          </p>

          <p
            style={{
              display: "inline-block",
              fontSize: "20px",
              textDecoration: "underline",
            }}
          >
            <a href="https://rajeshnambi1122.github.io/keeper-vire/">Live</a>
          </p>
          <GoLinkExternal />
        </div>
      </div>
    </div>
  );
};

export default Projects;
