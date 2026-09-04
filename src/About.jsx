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
        I am a versatile full-stack developer with a passion for building comprehensive digital solutions. My technical expertise spans across creating responsive websites, robust backend services, and automated cron job reporting systems. I have hands-on experience integrating complex features like Stripe payments, alongside a strong foundation in modern frameworks such as React.js, Next.js and Node.js. I focus on delivering scalable, user-friendly applications that perfectly balance functionality and aesthetics.
      </p>
      <p
        style={{
          fontSize: "30px",
          textAlign: "left",
          color: "#333",
          margin: "10px 0",
        }}
      >
        Beyond traditional development, I offer a unique blend of technical and digital marketing skills. I have proven experience in establishing brand identity, optimizing SEO, and leveraging tools like Google Search Console to drive online visibility. My expertise extends to managing Facebook and Instagram pages, creating engaging social media designs, and running targeted Meta Ads using the Meta Business Suite. This hybrid skill set allows me to not only build exceptional products but also ensure they reach and resonate with their intended audience.
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
