import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AboutUs.css';
import Banner from './about-us.webp';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="flex content">
            <h2>About Us</h2>
            <h3>Discover Our Team's Story</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam laborum quidem maiores reprehenderit illum cum aut, in soluta ipsam est quod voluptas saepe sequi esse, rem quis impedit earum.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <a href="/" className="btn">Learn More</a>
          </div>
          <div className="flex image">
            <img src={Banner} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;