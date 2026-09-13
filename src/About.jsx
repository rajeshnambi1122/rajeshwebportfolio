import React from "react";
import pfp1 from "./public/me.jpg";
import Aditanar from "./public/Aditanar.jpg";
import SRM from "./public/SRMlogo.png";
import Udemy from "./public/Udemy Cert.jpg";
import Coursera from "./public/Coursera.jpeg";
import { Button } from "@mui/material";
import { IoMdDocument } from "react-icons/io";
import { FaUserGraduate, FaReact, FaNodeJs, FaFacebook, FaInstagram, FaGoogle, FaSearchengin } from "react-icons/fa";
import { SiCoursera, SiUdemy, SiNextdotjs, SiStripe, SiMeta } from "react-icons/si";
import Carousel from "./Carousel";

const About = ({ aboutRef, educationRef }) => {
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
        I am a versatile full-stack developer with a passion for building
        comprehensive digital solutions. My technical expertise spans across
        creating responsive websites, robust backend services, and automated
        cron job reporting systems. I have hands-on experience integrating
        complex features like{" "}
        <span className="tech-clip tech-stripe"><SiStripe className="tech-icon" style={{ color: "#635bff" }} /> Stripe</span> payments,
        alongside a strong foundation in modern frameworks such as{" "}
        <span className="tech-clip tech-react"><FaReact className="tech-icon" style={{ color: "#61dafb" }} /> React.js</span>,{" "}
        <span className="tech-clip tech-next"><SiNextdotjs className="tech-icon" style={{ color: "#000" }} /> Next.js</span> and{" "}
        <span className="tech-clip tech-node"><FaNodeJs className="tech-icon" style={{ color: "#339933" }} /> Node.js</span>. I focus on
        delivering scalable, user-friendly applications that perfectly balance
        functionality and aesthetics.
      </p>
      <p
        style={{
          fontSize: "30px",
          textAlign: "left",
          color: "#333",
          margin: "10px 0",
        }}
      >
        Beyond traditional development, I offer a unique blend of technical and
        digital marketing skills. I have proven experience in establishing brand
        identity, optimizing{" "}
        <span className="tech-clip tech-seo"><FaSearchengin className="tech-icon" style={{ color: "#4285f4" }} /> SEO</span>, and leveraging tools
        like{" "}
        <span className="tech-clip tech-google"><FaGoogle className="tech-icon" style={{ color: "#4285f4" }} /> Google Search Console</span> to
        drive online visibility. My expertise extends to managing{" "}
        <span className="tech-clip tech-facebook"><FaFacebook className="tech-icon" style={{ color: "#1877f2" }} /> Facebook</span> and{" "}
        <span className="tech-clip tech-instagram"><FaInstagram className="tech-icon" style={{ color: "#e4405f" }} /> Instagram</span> pages,
        creating engaging social media designs, and running targeted{" "}
        <span className="tech-clip tech-meta"><SiMeta className="tech-icon" style={{ color: "#0081fb" }} /> Meta Ads</span> using the{" "}
        <span className="tech-clip tech-meta"><SiMeta className="tech-icon" style={{ color: "#0081fb" }} /> Meta Business Suite</span>. This
        hybrid skill set allows me to not only build exceptional products but
        also ensure they reach and resonate with their intended audience.
      </p>

      {/* Education strip */}
      <div ref={educationRef} className="about-education">
        <h2 className="about-education-title">
          <FaUserGraduate style={{ marginRight: "10px" }} />
          Education
        </h2>
        <div className="about-edu-cards">
          <div className="about-edu-card">
            <img src={Aditanar} alt="Aditanar College" className="about-edu-logo" />
            <div className="about-edu-info">
              <h3>B.A Economics</h3>
              <p className="about-edu-school">Aditanar College of Arts & Science</p>
              <p className="about-edu-year">June 2020 – June 2023</p>
            </div>
          </div>
          <div className="about-edu-card">
            <img src={SRM} alt="SRM University" className="about-edu-logo" />
            <div className="about-edu-info">
              <h3>MCA (Master of Computer Applications)</h3>
              <p className="about-edu-school">SRM Institute of Science and Technology</p>
              <p className="about-edu-year">2025 – Present</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications carousel */}
      <div className="about-certifications">
        <div className="certifications-container">
          <Carousel>
            <div className="projectbox">
              <img className="projectimage" src={Udemy} alt="Certificates" />
              <h2 className="projectname">
                The Complete Web Developer Bootcamp 2024
              </h2>
              <p style={{ padding: "5px" }}>
                I recently completed 'The Complete 2024 Web Development
                Bootcamp' by Dr. Angela Yu, where I gained comprehensive
                knowledge in both front-end and back-end development. The course
                covered advanced topics like Node.js, Express, and SQL, as well
                as building dynamic, responsive web applications using HTML, CSS,
                JavaScript, and React. This 61.5-hour intensive training has
                equipped me with the skills to create full-stack web applications
                and confidently tackle real-world development challenges.
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
              <img className="projectimage" src={Coursera} alt="Certificates" />
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

