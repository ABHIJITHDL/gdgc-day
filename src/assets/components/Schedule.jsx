import React from 'react';
import '../styles/Schedule.css';

const scheduleData = [
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
];

const Schedule = () => {
  return (
    <section id="schedule" className="schedule section">
      <div className="container">
        <h2 className="section-title">Event Schedule</h2>
        
        <div className="schedule-grid">
          {scheduleData.map((item, index) => (
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
        
        <div className="calendar-download">
          <h3>Add to Your Calendar</h3>
          <div className="calendar-buttons">
            <a href="#" className="btn btn-small">Google Calendar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;