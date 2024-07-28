import React from "react";
import pfp1 from "./pfp.jpg";
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
          height: "200px",
          borderRadius: "50%",
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
        Enthusiastic and dedicated Frontend Developer with a solid foundation in
        React, HTML, CSS, and JavaScript. A recent graduate with a Bachelor's
        degree in Economics, I am passionate about creating visually appealing,
        responsive, and user-friendly web applications. My experience includes
        developing and maintaining websites and web applications, with a keen
        eye for detail and a commitment to delivering high-quality work.
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
        <IoMdDocument style={{ fontSize: "30px", marginRight: "5px" }} />
        VIEW RESUME
      </Button>
    </div>
  );
};

export default About;
