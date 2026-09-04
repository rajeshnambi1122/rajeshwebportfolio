import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
  FaAws,
  FaFacebook,
  FaInstagram
} from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiMui,
  SiJquery,
  SiBootstrap,
  SiTypescript,
  SiAngular,
  SiRedux,
  SiVite,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVuedotjs,
  SiMysql,
  SiGooglesearchconsole,
  SiGoogleads,
  SiMeta
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbSeo } from "react-icons/tb";

const Skills = ({ skillsRef }) => {
  return (
    <div id="skills" className="skills" ref={skillsRef}>
      <h1>Technical Skills</h1>
      <div className="skillbox">
        <FaHtml5 className="skill-icons" style={{ "--hover-color": "#E34F26" }} />
        <FaCss3Alt className="skill-icons" style={{ "--hover-color": "#1572B6" }} />
        <FaJs className="skill-icons" style={{ "--hover-color": "#F7DF1E" }} />
        <FaPython className="skill-icons" style={{ "--hover-color": "#3776AB" }} />
        <SiJquery className="skill-icons" style={{ "--hover-color": "#0769AD" }} />
        <SiTypescript className="skill-icons" style={{ "--hover-color": "#3178C6" }} />
        <SiAngular className="skill-icons" style={{ "--hover-color": "#DD0031" }} />
        <SiVuedotjs className="skill-icons" style={{ "--hover-color": "#4FC08D" }} />
        <FaReact className="skill-icons" style={{ "--hover-color": "#61DAFB" }} />
        <SiVite className="skill-icons" style={{ "--hover-color": "#646CFF" }} />
        <SiRedux className="skill-icons" style={{ "--hover-color": "#764ABC" }} />
        <SiBootstrap className="skill-icons" style={{ "--hover-color": "#7952B3" }} />
        <SiTailwindcss className="skill-icons" style={{ "--hover-color": "#06B6D4" }} />
        <SiMui className="skill-icons" style={{ "--hover-color": "#007FFF" }} />
        <FaNodeJs className="skill-icons" style={{ "--hover-color": "#339933" }} />
        <FaNpm className="skill-icons" style={{ "--hover-color": "#CB3837" }} />
        <SiExpress className="skill-icons" style={{ "--hover-color": "#828282" }} />
        <SiMysql className="skill-icons" style={{ "--hover-color": "#4479A1" }} />
        <SiMongodb className="skill-icons" style={{ "--hover-color": "#47A248" }} />
        <SiPostman className="skill-icons" style={{ "--hover-color": "#FF6C37" }} />
        <FaGitAlt className="skill-icons" style={{ "--hover-color": "#F05032" }} />
        <VscVscode className="skill-icons" style={{ "--hover-color": "#007ACC" }} />
        <FaFigma className="skill-icons" style={{ "--hover-color": "#F24E1E" }} />
        <FaAws className="skill-icons" style={{ "--hover-color": "#FF9900" }} />
      </div>

      <h1 style={{ marginTop: "60px" }}>Digital Marketing & Business Skills</h1>
      <div className="skillbox">
        <TbSeo className="skill-icons" style={{ "--hover-color": "#828282" }} />
        <SiGooglesearchconsole className="skill-icons" style={{ "--hover-color": "#4285F4" }} />
        <SiGoogleads className="skill-icons" style={{ "--hover-color": "#F4B400" }} />
        <SiMeta className="skill-icons" style={{ "--hover-color": "#0468FF" }} />
        <FaFacebook className="skill-icons" style={{ "--hover-color": "#1877F2" }} />
        <FaInstagram className="skill-icons" style={{ "--hover-color": "#E4405F" }} />
      </div>

      <h2 style={{ textAlign: "center", margin: "40px" }}>
        & Also Learning More.....
      </h2>
    </div>
  );
};

export default Skills;
