import React, { useContext } from 'react';
import  AccessibilityContext  from '../context/AccessibilityContext';
import '../styles/Hero.css';

const Hero = () => {
  const { accessibilitySettings } = useContext(AccessibilityContext);
  
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Tech X Inclusivity</h1>
        <p>Join us for a transformative event where technology meets inclusivity. 
           Discover how innovation can create a more accessible and equitable future for all.</p>
        <div className="hero-buttons">
          <a href="#register" className="btn btn-primary">Register Now</a>
          <a href="#schedule" className="btn btn-secondary">View Schedule</a>
        </div>
        
        {/* Countdown timer to event */}
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-number">15</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">08</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">45</span>
            <span className="countdown-label">Minutes</span>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;