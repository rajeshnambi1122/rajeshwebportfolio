import React from "react";
import pfp from "./pfp.jpg";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <div className="hero">
      <img src={pfp} className="pfp" alt="Profile"></img>
      <h1>Rajesh Nambi</h1>
      <p className="heroabout"> A Frontend Developer</p>
      <div className="buttons">
        <a href="#about">
          <Button
            variant="text"
            sx={{
              color: "white",
              borderColor: "white",
              backgroundColor: "black",
              margin: "8px",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "black",
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
            margin: "8px",
            "&:hover": {
              borderColor: "white",
              backgroundColor: "black",
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
            margin: "8px",
            "&:hover": {
              borderColor: "white",
              backgroundColor: "black",
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
