import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About The Event</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>Tech X Inclusivity</strong> is a groundbreaking event that explores the intersection of technology and inclusivity. 
              Our mission is to showcase how innovation can create a more accessible and equitable world for people of all abilities, 
              backgrounds, and experiences.
            </p>
            <p>
              Join us for inspiring talks, interactive workshops, and networking opportunities that will challenge you to 
              think differently about technology's role in building inclusive spaces. Whether you're a student, professional, 
              educator, or enthusiast, this event offers valuable insights and practical takeaways.
            </p>
            <h3>What to Expect:</h3>
            <ul className="features-list">
              <li>
                <div className="feature-icon">📱</div>
                <div className="feature-text">
                  <strong>Accessible Tech Demos</strong>
                  <p>Experience the latest innovations in accessibility technology</p>
                </div>
              </li>
              <li>
                <div className="feature-icon">👥</div>
                <div className="feature-text">
                  <strong>Diverse Speakers</strong>
                  <p>Learn from industry experts and advocates from various backgrounds</p>
                </div>
              </li>
              <li>
                <div className="feature-icon">🧠</div>
                <div className="feature-text">
                  <strong>Interactive Workshops</strong>
                  <p>Gain hands-on experience with inclusive design principles</p>
                </div>
              </li>
              <li>
                <div className="feature-icon">🌐</div>
                <div className="feature-text">
                  <strong>Global Perspective</strong>
                  <p>Connect with participants from around the world</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="about-video">
            <div className="video-container">
              <iframe 
                title="Event Promo Video"
                src="about:blank" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="video-caption">
                Watch our event promo video with closed captions available in multiple languages
              </p>
            </div>
          </div>
        </div>
        
        <div className="event-details">
          <div className="detail-item">
            <div className="detail-icon">📅</div>
            <div className="detail-text">
              <h4>Date & Time</h4>
              <p>March 15-16, 2025</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>
          </div>
          
          <div className="detail-item">
            <div className="detail-icon">📍</div>
            <div className="detail-text">
              <h4>Location</h4>
              <p>Tech Innovation Center</p>
              <p>123 Campus Drive</p>
              <p><a href="#map">View Map & Accessibility Information</a></p>
            </div>
          </div>
          
          <div className="detail-item">
            <div className="detail-icon">🎟️</div>
            <div className="detail-text">
              <h4>Registration</h4>
              <p>Free for all students</p>
              <p>$20 for professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;