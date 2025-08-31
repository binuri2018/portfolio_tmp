import React from 'react';
import './Skills.css';

const Skills = ({ skillsData }) => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          <div className="skills-category">
            <h3 className="skills-category-title">Technical Skills</h3>
            <div className="skills-grid">
              {skillsData.technical.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="skills-category-title">Professional Skills</h3>
            <div className="skills-grid">
              {skillsData.professional.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

