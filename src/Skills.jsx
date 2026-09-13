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

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
      { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
      { icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: FaReact, name: "React", color: "#61DAFB" },
      { icon: SiRedux, name: "Redux", color: "#764ABC" },
      { icon: SiVite, name: "Vite", color: "#646CFF" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { icon: FaNodeJs, name: "Node.js", color: "#339933" },
      { icon: SiExpress, name: "Express", color: "#828282" },
      { icon: FaPython, name: "Python", color: "#3776AB" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: FaAws, name: "AWS", color: "#FF9900" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { icon: FaGitAlt, name: "Git", color: "#F05032" },
      { icon: FaNpm, name: "npm", color: "#CB3837" },
      { icon: SiPostman, name: "Postman", color: "#FF6C37" },
      { icon: VscVscode, name: "VS Code", color: "#007ACC" },
      { icon: FaFigma, name: "Figma", color: "#F24E1E" },
    ],
  },
  {
    title: "Digital Marketing",
    skills: [
      { icon: TbSeo, name: "SEO", color: "#4285F4" },
      { icon: SiGooglesearchconsole, name: "Search Console", color: "#4285F4" },
      { icon: SiGoogleads, name: "Google Ads", color: "#F4B400" },
      { icon: SiMeta, name: "Meta Suite", color: "#0468FF" },
      { icon: FaFacebook, name: "Facebook", color: "#1877F2" },
      { icon: FaInstagram, name: "Instagram", color: "#E4405F" },
    ],
  },
];

const Skills = ({ skillsRef }) => {
  return (
    <div id="skills" className="skills" ref={skillsRef}>
      <h1>My Skills</h1>
      {skillCategories.map((category, catIdx) => (
        <div key={catIdx} className="skill-category">
          <h2 className="skill-category-title">{category.title}</h2>
          <div className="skill-grid">
            {category.skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="skill-card"
                  style={{ "--brand-color": skill.color }}
                >
                  <div className="skill-card-icon">
                    <Icon />
                  </div>
                  <span className="skill-card-name">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <p className="skills-learning">& Also Learning More.....</p>
    </div>
  );
};

export default Skills;
