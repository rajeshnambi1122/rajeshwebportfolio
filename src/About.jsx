import React from "react";
import pfp1 from "./public/me.jpg";
import { Button } from "@mui/material";
import { IoMdDocument } from "react-icons/io";

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} className="about">
      <h1>About Me</h1>
      <p>Welcome to My Portfolio!</p>
      <img
        src={pfp1}
        alt="Profile"
        style={{
          width: "200px",
          borderRadius: "25px",
          objectFit: "cover",
        }}
      />
      <p
        style={{
          fontSize: "30px",
          textAlign: "left",
          color: "#333",
          margin: "10px 0",
        }}
      >
        A motivated full-stack developer with expertise in front-end
        technologies like HTML, CSS, JavaScript, React, Angular, and Vue, along
        with experience in React Native and Flutter for mobile app development.
        Proficient in Python, as well as backend technologies such as Node.js,
        Express, and SQL. Skilled in creating responsive, user-friendly web
        applications and delivering solutions that blend functionality and
        aesthetics. Passionate about learning new technologies, contributing to
        impactful projects, and open to relocation to embrace new challenges.
      </p>
      <p
        style={{
          fontSize: "30px",
          textAlign: "left",
          color: "#333",
          margin: "10px 0",
        }}
      >
        My strong foundation in frontend development is complemented by my
        eagerness to learn and implement new technologies and methodologies. I
        thrive in collaborative environments and enjoy working closely with
        clients and team members to achieve common goals. My proficiency in
        using modern development tools and my commitment to best practices in
        web development enable me to create maintainable and scalable code.
      </p>

      <div></div>
      <a
        href="https://drive.google.com/file/d/1tlXdRhhqsdXq8Vuh8pzYsRpf_vk3b7pB/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
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
            borderRadius: "25px",
          }}
        >
          <IoMdDocument
            style={{
              fontSize: "30px",
              marginRight: "5px",
            }}
          />
          VIEW RESUME
        </Button>
      </a>
    </div>
  );
};

export default About;
