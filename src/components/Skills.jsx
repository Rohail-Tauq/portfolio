import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaFigma } from 'react-icons/fa';
import {SiCanva } from 'react-icons/si';

const developmentSkills = [
  { name: 'HTML', icon: <FaHtml5 color="#e44d26" /> },
  { name: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
  { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
  { name: 'React JS', icon: <FaReact color="#61dbfb" /> },
];

const toolSkills = [
  { name: 'GitHub', icon: <FaGithub color="#ffffff" /> },
];

const designSkills = [
  { name: 'Canva', icon: <SiCanva color="#00c4cc" /> },
  { name: 'Figma', icon: <FaFigma color="#a259ff" /> },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>My <span>Skills</span></h2>
      <div className="skills-categories">

        {/* Development Card */}
        <div className="skill-card glass">
          <h3>Development</h3>
          <div className="skill-items">
            {developmentSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Card */}
        <div className="skill-card glass">
          <h3>Tools</h3>
          <div className="skill-items">
            {toolSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Design Card */}
        <div className="skill-card glass">
          <h3>Design</h3>
          <div className="skill-items">
            {designSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
