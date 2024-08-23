import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
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
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = ({ skillsRef }) => {
  return (
    <div id="skills" className="skills" ref={skillsRef}>
      <h1>My Skills</h1>
      <div className="skillbox">
        <FaHtml5 className="skill-icons" />
        <FaCss3Alt className="skill-icons" />
        <FaJs className="skill-icons" />
        <SiJquery className="skill-icons" />
        <SiTypescript className="skill-icons" />
        <SiAngular className="skill-icons" />
        <FaReact className="skill-icons" />
        <SiVite className="skill-icons" />
        <SiRedux className="skill-icons" />
        <SiBootstrap className="skill-icons" />
        <SiTailwindcss className="skill-icons" />
        <SiMui className="skill-icons" />
        <FaNodeJs className="skill-icons" />
        <FaNpm className="skill-icons" />
        <SiExpress className="skill-icons" />
        <SiMongodb className="skill-icons" />
        <SiPostman className="skill-icons" />
        <FaGitAlt className="skill-icons" />
        <VscVscode className="skill-icons" />
      </div>
      <h2 style={{ textAlign: "center", margin: "20px" }}>
        & Also Learning More.....
      </h2>
    </div>
  );
};

export default Skills;
