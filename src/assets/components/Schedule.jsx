import React, { useState } from 'react';
import '../styles/Schedule.css';

const scheduleData = {
  day1: [
    {
      time: "9:00 - 9:30",
      title: "Registration & Welcome Coffee",
      location: "Main Lobby",
      description: "Check in and collect your event materials. Coffee, tea, and refreshments will be provided.",
      accessibility: ["Wheelchair accessible", "Assistive listening devices available"]
    },
    {
      time: "9:30 - 10:00",
      title: "Opening Keynote: The Future of Inclusive Technology",
      speaker: "Dr. Maya Rodriguez",
      location: "Main Auditorium",
      description: "An inspiring look at how technology can be designed to include everyone from the start.",
      accessibility: ["Sign language interpreter", "Live captioning", "Wheelchair accessible"]
    },
    {
      time: "10:15 - 11:15",
      title: "Panel: Breaking Barriers in Tech Education",
      speaker: "James Chen, Sofia Mendez, Amara Okafor",
      location: "Hall A",
      description: "How can we ensure technology education reaches everyone? Our panelists discuss approaches to creating more inclusive learning environments.",
      accessibility: ["Sign language interpreter", "Live captioning", "Wheelchair accessible"]
    },
    {
      time: "11:30 - 12:30",
      title: "Workshop: Hands-on Web Accessibility Testing",
      speaker: "James Chen",
      location: "Computer Lab",
      description: "Learn practical techniques to test your websites and applications for accessibility compliance.",
      accessibility: ["Screen reader available", "Wheelchair accessible", "Materials in multiple formats"]
    },
    {
      time: "12:30 - 1:30",
      title: "Lunch Break",
      location: "Dining Hall",
      description: "Enjoy a complimentary lunch with vegan, gluten-free, and allergen-friendly options.",
      accessibility: ["Wheelchair accessible", "Dietary information clearly labeled"]
    },
    {
      time: "1:30 - 2:30",
      title: "Talk: Designing for Neurodiversity",
      speaker: "Dr. Raj Patel",
      location: "Hall B",
      description: "Learn how to create digital experiences that work well for neurodivergent users.",
      accessibility: ["Quiet room available", "Live captioning", "Wheelchair accessible"]
    },
    {
      time: "2:45 - 3:45",
      title: "Workshop: Creating Accessible Mobile Apps",
      speaker: "Amara Okafor",
      location: "Design Studio",
      description: "Hands-on session covering mobile accessibility best practices and testing.",
      accessibility: ["Screen reader available", "Wheelchair accessible"]
    },
    {
      time: "4:00 - 5:00",
      title: "Closing Session: Day 1 Reflections & Networking",
      location: "Main Hall",
      description: "Discuss key takeaways and connect with fellow attendees.",
      accessibility: ["Sign language interpreter", "Wheelchair accessible", "Quiet space available"]
    }
  ],
  day2: [
    {
      time: "9:00 - 9:30",
      title: "Day 2 Welcome",
      location: "Main Auditorium",
      description: "Brief overview of the day's schedule.",
      accessibility: ["Sign language interpreter", "Live captioning", "Wheelchair accessible"]
    },
    {
      time: "9:30 - 10:30",
      title: "Keynote: Global Perspectives on Technology Access",
      speaker: "Sofia Mendez",
      location: "Main Auditorium",
      description: "How we can bridge the digital divide across different cultures and geographies.",
      accessibility: ["Sign language interpreter", "Live captioning", "Wheelchair accessible"]
    },
    {
      time: "10:45 - 11:45",
      title: "Panel: Inclusive Gaming Experiences",
      speaker: "Kenji Tanaka, Dr. Raj Patel, James Chen",
      location: "Hall A",
      description: "Making gaming accessible to players of all abilities.",
      accessibility: ["Sign language interpreter", "Live captioning", "Wheelchair accessible"]
    },
    {
      time: "12:00 - 1:00",
      title: "Lunch Break",
      location: "Dining Hall",
      description: "Enjoy a complimentary lunch with vegan, gluten-free, and allergen-friendly options.",
      accessibility: ["Wheelchair accessible", "Dietary information clearly labeled"]
    },
    {
      time: "1:00 - 2:00",
      title: "Workshop: Inclusive AI Development",
      speaker: "Dr. Maya Rodriguez",
      location: "Computer Lab",
      description: "Practical techniques for developing AI systems that avoid bias and work for diverse users.",
      accessibility: ["Screen reader available", "Wheelchair accessible", "Materials in multiple formats"]
    },
    {
      time: "2:15 - 3:15",
      title: "Talk: Accessible Documentation and Content",
      speaker: "Sofia Mendez",
      location: "Hall B",
      description: "Creating content that everyone can understand and access.",
      accessibility: ["Sign language interpreter", "Live captioning", "Wheelchair accessible"]
    },
    {
      time: "3:30 - 4:30",
      title: "Workshop: Adaptive Technology Showcase",
      speaker: "Kenji Tanaka",
      location: "Innovation Lab",
      description: "Try out various adaptive technologies and learn how they work.",
      accessibility: ["Wheelchair accessible", "One-on-one assistance available"]
    },
    {
      time: "4:45 - 5:30",
      title: "Closing Ceremony & Call to Action",
      location: "Main Auditorium",
      description: "Reflecting on the event and discussing next steps for creating more inclusive technology.",
      accessibility: ["Sign language interpreter", "Live captioning", "Wheelchair accessible"]
    }
  ]
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');
  
  return (
    <section id="schedule" className="schedule section">
      <div className="container">
        <h2 className="section-title">Event Schedule</h2>
        
        <div className="schedule-tabs">
          <button 
            className={`schedule-tab ${activeDay === 'day1' ? 'active' : ''}`}
            onClick={() => setActiveDay('day1')}
            aria-pressed={activeDay === 'day1'}
          >
            Day 1: March 15
          </button>
          <button 
            className={`schedule-tab ${activeDay === 'day2' ? 'active' : ''}`}
            onClick={() => setActiveDay('day2')}
            aria-pressed={activeDay === 'day2'}
          >
            Day 2: March 16
          </button>
        </div>
        
        <div className="schedule-grid">
          {scheduleData[activeDay].map((item, index) => (
            <div key={index} className="schedule-item">
              <div className="schedule-time">{item.time}</div>
              <div className="schedule-content">
                <h3>{item.title}</h3>
                {item.speaker && <p className="schedule-speaker">Presented by: {item.speaker}</p>}
                <p className="schedule-location">
                  <span className="location-icon">📍</span> {item.location}
                </p>
                <p className="schedule-description">{item.description}</p>
                
                {item.accessibility && (
                  <div className="accessibility-features">
                    <h4>Accessibility Features:</h4>
                    <ul>
                      {item.accessibility.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="schedule-notes">
          <h3>Additional Information</h3>
          <ul>
            <li>All sessions will be recorded and made available with captions after the event.</li>
            <li>Quiet rooms are available throughout the venue for anyone who needs a break.</li>
            <li>Personal assistants and service animals are welcome at all sessions.</li>
            <li>If you have specific accessibility needs, please contact us at <a href="mailto:accessibility@techxinclusivity.edu">accessibility@techxinclusivity.edu</a></li>
          </ul>
        </div>
        
        <div className="calendar-download">
          <h3>Add to Your Calendar</h3>
          <div className="calendar-buttons">
            <a href="#" className="btn btn-small">Google Calendar</a>
            <a href="#" className="btn btn-small">Apple Calendar</a>
            <a href="#" className="btn btn-small">Outlook</a>
            <a href="#" className="btn btn-small">Download iCal</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;