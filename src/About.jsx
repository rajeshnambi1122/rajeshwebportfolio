import React from "react";
import pfp from "./pfp.jpg";

function About() {
  return (
    <div
      className="about"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h1>About Me</h1>
        <p>Welcome to My Portfolio!</p>
        <p
          style={{
            fontSize: "30px",
            textAlign: "left",
            color: "#333",
            lineHeight: "1.6",
            margin: "10px 0",
          }}
        >
          Enthusiastic and dedicated Frontend Developer with a solid foundation
          in React, HTML, CSS, and JavaScript. A recent graduate with a
          Bachelor's degree in Economics, I am passionate about creating
          visually appealing, responsive, and user-friendly web applications. My
          experience includes developing and maintaining websites and web
          applications, with a keen eye for detail and a commitment to
          delivering high-quality work.
        </p>
      </div>
      <div style={{ flexShrink: 0 }}>
        <img
          src={pfp}
          alt="Profile"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

export default About;
