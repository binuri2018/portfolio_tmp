import React from 'react';
import './Hero.css';

const Hero = ({ heroData }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">{heroData.name}</h1>
            <h2 className="hero-title">{heroData.title}</h2>
            <p className="hero-description">{heroData.description}</p>

            {/* GitHub and LinkedIn Buttons */}
            <div className="hero-socials">
              <a
                href={heroData.github}
                className="social-button github"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={heroData.linkedin}
                className="social-button linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={heroData.profileImage}
              alt={`${heroData.name} - Profile`}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


