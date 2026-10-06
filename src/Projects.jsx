import React from "react";
import SLstudio from "./public/SLstudio.png";
import Keeper from "./public/Keeper.png";
import Sandy from "./public/sandy.png";
import Tata from "./public/tata.png";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import Carousel from "./Carousel";

const Projects = ({ projectsRef }) => {
  return (
    <div>
      <h1>My Projects</h1>
      <div ref={projectsRef} className="projects-container">
        <Carousel>
          <div className="projectbox">
            <img className="projectimage" src={SLstudio} alt="SL Studio"></img>
            <h2 className="projectname">SL Studio</h2>
            <p>
              Designed and developed a responsive website for SL Studio using
              HTML, CSS, and JavaScript. Created an attractive portfolio showcase
              and detailed service information sections. Ensured cross-browser
              compatibility and seamless user experience across devices.
            </p>
            <div className="project-links">
              <a href="https://github.com/rajeshnambi1122/SLstudio" className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href="https://slstudio.netlify.app/" className="project-link" target="_blank" rel="noopener noreferrer">
                <GoLinkExternal /> Live
              </a>
            </div>
          </div>
          <div className="projectbox">
            <img className="projectimage" src={Keeper} alt="Keeper"></img>
            <h2 className="projectname">Keeper</h2>
            <p>
              Developed a responsive note-taking app using React and Vite,
              allowing users to create, view, and delete notes. Implemented a
              clean and intuitive user interface with real-time note management
              and dynamic updates.
            </p>
            <div className="project-links">
              <a href="https://github.com/rajeshnambi1122/keeper-vire" className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href="https://rajeshnambi1122.github.io/keeper-vire/" className="project-link" target="_blank" rel="noopener noreferrer">
                <GoLinkExternal /> Live
              </a>
            </div>
          </div>
          <div className="projectbox">
            <img className="projectimage" src={Sandy} alt="Sandy's Market"></img>
            <h2 className="projectname">Sandy's Market</h2>
            <p>
              Architected and delivered a full-stack web application for a U.S.-based gas
              station & pizza shop, integrating React front end with Node.js/Express
              back end and MongoDB. Implemented Firebase Cloud Messaging for push
              notifications and automated email alerts for order management.
            </p>
            <div className="project-links">
              <a href="https://github.com/rajeshnambi1122/sandymarket" className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href="https://www.sandysmarket.net/" className="project-link" target="_blank" rel="noopener noreferrer">
                <GoLinkExternal /> Live
              </a>
            </div>
          </div>
          <div className="projectbox">
            <img className="projectimage" src={Tata} alt="Tata Marathon"></img>
            <h2 className="projectname">Tata Marathon</h2>
            <p>
              Developed Angular frontend for Tata Power-sponsored Halwa City
              Marathon 2025, featuring bilingual support (English/Tamil) and responsive
              design for 4000+ participants. Built comprehensive registration system with
              form validation and an admin dashboard.
            </p>
            <div className="project-links">
              <a href="https://github.com/rajeshnambi1122/tatasocialnature" className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href="https://www.sanct.in/" className="project-link" target="_blank" rel="noopener noreferrer">
                <GoLinkExternal /> Live
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
