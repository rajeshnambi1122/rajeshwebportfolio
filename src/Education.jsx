import React from "react";
import Udemy from "./public/Udemy Cert.jpg";
import Aditanar from "./public/Aditanar.jpg";
import SRM from "./public/SRMlogo.png";
import Coursera from "./public/Coursera.jpeg";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa";
import Carousel from "./Carousel";

const Education = ({ educationRef }) => {
  return (
    <div ref={educationRef} className="Education">
      <h1>My Education</h1>
      {/* B.A Economics Section - Side by side layout */}
      <div className="ba-container">
        <div className="ba-text">
          <div className="ba-header">
            <FaUserGraduate className="ba-icon" />
            <h2>B.A Economics</h2>
          </div>
          <p className="ba-university">Aditanar College of Arts & Science</p>
          <p className="ba-duration">June 2020 - June 2023</p>
        </div>
        <div className="ba-logo">
          <img src={Aditanar} alt="Aditanar" className="ba-logo-img" />
        </div>
      </div>

      {/* Dividing Line */}
      <div style={{
        display: "flex",
        alignItems: "center",
        margin: "40px 0",
        padding: "0 20px"
      }}>
        <div style={{
          flex: 1,
          height: "2px",
          background: "#333"
        }}></div>
      </div>

      {/* MCA Section - Side by side layout */}
      <div className="mca-container">
        <div className="mca-text">
          <div className="mca-header">
            <FaUserGraduate className="mca-icon" />
            <h2>MCA (Master of Computer Applications)</h2>
          </div>
          <p className="mca-university">SRM Institute of Science and Technology</p>
          <p className="mca-duration">2025 - Present</p>
        </div>
        <div className="mca-logo">
          <img src={SRM} alt="SRM" className="mca-logo-img" />
        </div>
      </div>
      <div className="certifications-container">
        <Carousel>
          <div className="projectbox">
            <img className="projectimage" src={Udemy} alt="Certficates"></img>
            <h2 className="projectname">
              The Complete Web Developer Bootcamp 2024
            </h2>
            <p style={{ padding: "5px" }}>
              I recently completed 'The Complete 2024 Web Development Bootcamp' by
              Dr. Angela Yu, where I gained comprehensive knowledge in both
              front-end and back-end development. The course covered advanced
              topics like Node.js, Express, and SQL, as well as building dynamic,
              responsive web applications using HTML, CSS, JavaScript, and React.
              This 61.5-hour intensive training has equipped me with the skills to
              create full-stack web applications and confidently tackle real-world
              development challenges.
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
              I have completed the 'Introduction to Generative AI' course by
              Google Cloud, where I explored the fundamentals of generative AI,
              including its applications and underlying principles. This course
              provided me with a solid foundation in understanding how AI can
              create new content. I am very much interested in AI & LLM.
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
        </Carousel>
      </div>
    </div>
  );
};
export default Education;
