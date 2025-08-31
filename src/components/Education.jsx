import React from 'react';
import './Education.css';

const Education = ({ educationData }) => {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <span className="education-year">{edu.year}</span>
              </div>
              <h4 className="education-institution">{edu.institution}</h4>
              {edu.details && (
                <p className="education-details">{edu.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

