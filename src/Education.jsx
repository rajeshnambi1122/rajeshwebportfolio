import React from "react";
import Udemy from "./public/Udemy Cert.jpg";
import Coursera from "./public/Coursera.jpeg";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  return (
    <div className="Education">
      <h1>My Education</h1>
      <FaUserGraduate className="graduate" />
      <h2>B.A Economics</h2>
      <p>Aditanar College of Arts & Science</p>
      <p>June 2020 - June 2023</p>
      <div className="projects">
        <div className="projectbox">
          <img className="projectimage" src={Udemy} alt="Certficates"></img>
          <h2 className="projectname">
            The Complete Web Developer Bootcamp 2024
          </h2>
          <p style={{ padding: "5px" }}>
            I Learnt all of the Web Developement Skills from this Course. Which
            is thought By Angela Yu Mam
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
            <a href="https://www.udemy.com/certificate/UC-944d3b4a-3dd3-47cc-b706-920fa62d458c/">
              <SiUdemy />
              View Certificate
            </a>
          </p>
        </div>
        <div className="projectbox">
          <img className="projectimage" src={Coursera} alt="Certficates"></img>
          <h2 className="projectname">Introduction to Generative AI</h2>
          <p style={{ padding: "5px" }}>
            I am Also Intersted in AI, LLM etc. So I finished this course. This
            an Introduction Course on Gen AI By Google Cloud.
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
            <a href="https://coursera.org/verify/DRMK2ZPJDTAJ">
              <SiCoursera />
              View Certificate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Education;
