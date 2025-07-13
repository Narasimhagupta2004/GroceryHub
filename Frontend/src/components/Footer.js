import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Branches</h3>
          <a href="#"> <FaMapMarkerAlt />Beside Main Road</a>
          <a href="#">Rambhadrapuram</a>
          <a href="#">Vizianagaram Dist</a>
          <a href="#">Andhra Pradesh</a>
        </div>

        <div className="box">
          <h3>Contact info</h3>
          <a href="tel:+919676******"> <FaPhone /> +91-9676****** </a>
          <a href="tel:+91970*******"> <FaPhone /> +91-970******* </a>
          <a href="mailto:groceryhub.com"> <FaEnvelope /> groceryhub@gmail.com </a>
          <a href="mailto:kirana@gmail.com"> <FaEnvelope /> kirana@gmail.com </a>
          <a href="#"> <FaMapMarkerAlt /> Andhra Pradesh, Vizianagaram 535579</a>
        </div>

        <div className="box">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"> 
            <FaFacebookF /> facebook 
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"> 
            <FaTwitter /> twitter 
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"> 
            <FaInstagram /> instagram 
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"> 
            <FaLinkedinIn /> linkedin 
          </a>
        </div>
      </div>

      <div className="credit">
        created by <span>Gupta</span> | © all rights reserved
      </div>
    </section>
  );
};

export default Footer;