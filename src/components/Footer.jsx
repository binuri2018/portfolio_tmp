import React from 'react';
import './Footer.css';

const Footer = ({ footerData }) => {
  const getIconClass = (iconName) => {
    switch (iconName) {
      case 'github':
        return 'fab fa-github';
      case 'linkedin':
        return 'fab fa-linkedin';
      case 'globe':
        return 'fas fa-globe';
      default:
        return 'fas fa-link';
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-copyright">{footerData.copyright}</p>
          <div className="footer-social">
            {footerData.socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <i className={getIconClass(social.icon)}></i>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

