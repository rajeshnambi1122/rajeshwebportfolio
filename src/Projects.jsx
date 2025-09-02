import React from "react";
import SLstudio from "./public/SLstudio.png";
import Keeper from "./public/Keeper.png";
import Sandy from "./public/sandy.png";
import Tata from "./public/tata.png";
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
        <div className="projectbox">
          <img className="projectimage" src={Sandy} alt="Sandy's Market"></img>
          <h2 className="projectname">Sandy's Market</h2>
          <p style={{ padding: "5px" }}>
            Architected and delivered a full-stack web application for a U.S.-based gas
            station & pizza shop, integrating React/Vite front end with Node.js/Express
            back end and MongoDB Atlas. Partnered with the client to translate business
            needs (food ordering, gas prices) into intuitive UI flows and robust RESTful
            APIs. Implemented Firebase Cloud Messaging for push notifications and
            automated email alerts for order management, status updates, and customer
            confirmations across Android app and web platform.
          </p>
          <p
            style={{
              display: "inline-block",
              fontSize: "20px",
              textDecoration: "underline",
            }}
          >
            <a href="https://www.sandysmarket.net/">Live</a>
          </p>
          <GoLinkExternal />
        </div>
        <div className="projectbox">
          <img className="projectimage" src={Tata} alt="Tata Marathon"></img>
          <h2 className="projectname">Tata Marathon</h2>
          <p style={{ padding: "5px" }}>
            Developed Angular frontend application for Tata Power-sponsored Halwa City
            Marathon 2025, featuring bilingual support (English/Tamil) and responsive
            design for 4000+ participants. Built comprehensive registration system with
            form validation, multiple event categories, and real-time feedback to
            streamline community marathon sign-ups and participant management. Created an
            admin dashboard with secure authentication, participant management, bulk
            upload capabilities, and analytics for efficient event coordination by
            organizers.
          </p>
          <p
            style={{
              display: "inline-block",
              fontSize: "20px",
              textDecoration: "underline",
            }}
          >
            <a href="https://www.sanct.in/">Live</a>
          </p>
          <GoLinkExternal />
        </div>
      </div>
    </div>
  );
};

export default Projects;
