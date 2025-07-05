import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPaintBrush, FaPalette } from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: <FaHtml5 color="#e44d26" />, level: 90 },
  { name: 'CSS', icon: <FaCss3Alt color="#264de4" />, level: 85 },
  { name: 'JavaScript', icon: <FaJs color="#f0db4f" />, level: 80 },
  { name: 'React JS', icon: <FaReact color="#61dbfb" />, level: 75 },
  { name: 'UI/UX Design', icon: <FaPaintBrush color="#ffb400" />, level: 70 },
  { name: 'Graphics Design', icon: <FaPalette color="#c0392b" />, level: 65 },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
            <span className="skill-percent">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
