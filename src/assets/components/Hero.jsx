import React, { useContext, useEffect, useState } from 'react';
import AccessibilityContext from '../context/AccessibilityContext';
import '../styles/Hero.css';

const Hero = () => {
  const { accessibilitySettings } = useContext(AccessibilityContext);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('March 8, 2025 09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
       <img src="group.jpeg" alt="Group Image" className="hero-background" />
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Tech X Inclusivity</h1>
        <p>Join us for a transformative event where technology meets inclusivity. 
           Discover how innovation can create a more accessible and equitable future for all.</p>
        <div className="hero-buttons">
          <a href="#register" className="btn btn-secondary">Register Now</a>
          <a href="#schedule" className="btn btn-secondary">View Schedule</a>
        </div>
        
        {/* Countdown timer to event */}
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;