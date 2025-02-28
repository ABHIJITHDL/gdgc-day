import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tech X Inclusivity</h3>
            <p>
              A student-led initiative promoting inclusive and accessible technology. 
              Join us in creating a future where technology serves everyone.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Visit our Facebook page">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Visit our Twitter page">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Visit our Instagram page">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Visit our LinkedIn page">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#about">About the Event</a></li>
              <li><a href="#speakers">Speakers</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#register">Register</a></li>
              <li><a href="#venue">Venue Information</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <address>
              <p><i className="fas fa-map-marker-alt"></i> Tech Innovation Center, 123 Campus Drive</p>
              <p><i className="fas fa-envelope"></i> <a href="mailto:info@techxinclusivity.edu">info@techxinclusivity.edu</a></p>
              <p><i className="fas fa-phone"></i> <a href="tel:+15551234567">(555) 123-4567</a></p>
            </address>
          </div>
          
          <div className="footer-section">
            <h3>Accessibility Statement</h3>
            <p>
              We are committed to making this event accessible to all participants. 
              If you need specific accommodations, please contact us at <a href="mailto:accessibility@techxinclusivity.edu">accessibility@techxinclusivity.edu</a>.
            </p>
            <a href="#accessibility-statement" className="btn btn-small">Read Full Statement</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="language-selector-footer">
            <label htmlFor="language-select-footer">Language:</label>
            <select id="language-select-footer" aria-label="Select language">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="zh">中文</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
          
          <p className="copyright">
            &copy; {new Date().getFullYear()} Tech X Inclusivity. All rights reserved.
          </p>
          
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#cookie">Cookie Policy</a>
          </div>
        </div>
        
        <div className="certification">
          <p>
            <img src="/images/wcag-2.1-logo.png" alt="WCAG 2.1 AA Compliant" width="60" />
            This website meets WCAG 2.1 AA accessibility standards.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;