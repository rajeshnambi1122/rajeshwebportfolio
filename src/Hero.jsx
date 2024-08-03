import React from "react";
import pfp from "./public/pfp.jpg";
import { Button } from "@mui/material";
import "animate.css";

const Hero = ({
  skillsRef,
  aboutRef,
  projectsRef,
  educationRef,
  scrollToSection,
}) => {
  return (
    <div class="animate__animated animate__fadeInDown animate__delay-2s">
      <div className="hero">
        <img src={pfp} className="pfp" alt="Profile"></img>
        <h1 className="animate__animated animate__pulse animate__infinite">
          Rajesh Nambi
        </h1>
        <p className="heroabout"> A Frontend Developer</p>
        <div className="buttons">
          <Button
            onClick={() => scrollToSection(aboutRef)}
            variant="text"
            sx={{
              color: "white",
              borderColor: "white",
              backgroundColor: "black",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              margin: "8px",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "papayawhip",
                color: "black",
              },
            }}
          >
            About
          </Button>
          <Button
            variant="text"
            onClick={() => scrollToSection(skillsRef)}
            sx={{
              color: "white",
              borderColor: "white",
              backgroundColor: "black",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.19)",
              margin: "8px",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "papayawhip",
                color: "black",
              },
            }}
          >
            Skills
          </Button>
          <Button
            variant="text"
            onClick={() => scrollToSection(projectsRef)}
            sx={{
              color: "white",
              borderColor: "white",
              backgroundColor: "black",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.19)",
              margin: "8px",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "papayawhip",
                color: "black",
              },
            }}
          >
            Projects
          </Button>
          <Button
            variant="text"
            onClick={() => scrollToSection(educationRef)}
            sx={{
              color: "white",
              borderColor: "white",
              backgroundColor: "black",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.19)",
              margin: "8px",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "papayawhip",
                color: "black",
              },
            }}
          >
            Education
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
