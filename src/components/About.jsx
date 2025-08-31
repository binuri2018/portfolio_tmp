import React from 'react';
import './About.css';

const About = ({ aboutData }) => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-bio">{aboutData.shortBio}</p>
            <p className="about-description">{aboutData.longDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

