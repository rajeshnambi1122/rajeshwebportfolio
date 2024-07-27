import React from "react";
import pfp from "./pfp.jpg";
import { Button } from "@mui/material";
import "animate.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src={pfp} className="pfp" alt="Profile"></img>
      <h1 className="animate__animated animate__tada">Rajesh Nambi</h1>
      <p className="heroabout"> A Frontend Developer</p>
      <div className="buttons">
        <a href="#about">
          <Button
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
        </a>
        <Button
          variant="text"
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
      </div>
    </div>
  );
};

export default Hero;
