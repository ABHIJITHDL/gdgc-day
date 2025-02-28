import React, { useState } from 'react';
import '../styles/Speakers.css';

const speakersData = [
  {
    id: 1,
    name: "Dr. Maya Rodriguez",
    role: "AI Ethics Researcher",
    company: "Tech Inclusion Institute",
    bio: "Dr. Rodriguez specializes in developing ethical frameworks for AI that consider diverse user needs. Her work focuses on eliminating algorithmic bias and ensuring technology serves all communities equally.",
    topics: ["AI Ethics", "Algorithmic Bias", "Inclusive ML Models"],
    image: "/images/speakers/speaker-1.jpg",
    pronouns: "she/her"
  },
  {
    id: 2,
    name: "James Chen",
    role: "Accessibility Specialist",
    company: "Adaptive Technologies",
    bio: "James has spent over a decade creating accessible digital experiences. As someone with a visual impairment, he brings personal insight to his advocacy for technology that works for everyone.",
    topics: ["Web Accessibility", "WCAG Standards", "Assistive Tech"],
    image: "/images/speakers/speaker-2.jpg",
    pronouns: "he/him"
  },
  {
    id: 3,
    name: "Amara Okafor",
    role: "UX Design Director",
    company: "Inclusive Design Co.",
    bio: "Amara leads design teams to create products that consider the full spectrum of human abilities and experiences. Her award-winning work has transformed how companies approach inclusive design.",
    topics: ["Inclusive UX", "Design Systems", "User Research"],
    image: "/images/speakers/speaker-3.jpg",
    pronouns: "they/them"
  },
  {
    id: 4,
    name: "Dr. Raj Patel",
    role: "Neurodiversity Advocate",
    company: "Spectrum Tech Alliance",
    bio: "Dr. Patel researches how technology can better serve neurodivergent users. His work has influenced major tech companies to implement more inclusive features in their products.",
    topics: ["Cognitive Accessibility", "Assistive Tools", "Inclusive Workplaces"],
    image: "/images/speakers/speaker-4.jpg",
    pronouns: "he/him"
  },
  {
    id: 5,
    name: "Sofia Mendez",
    role: "Global Inclusion Strategist",
    company: "Worldwide Tech Access",
    bio: "Sofia works to ensure technology is accessible across cultural and linguistic barriers. Her projects have helped expand tech access in underserved communities worldwide.",
    topics: ["Global Accessibility", "Localization", "Digital Divide"],
    image: "/images/speakers/speaker-5.jpg",
    pronouns: "she/her"
  },
  {
    id: 6,
    name: "Kenji Tanaka",
    role: "Inclusive Gaming Developer",
    company: "Access Play Studios",
    bio: "Kenji creates gaming experiences that are accessible to players with diverse abilities. His studio has pioneered innovative control systems and adaptive gameplay features.",
    topics: ["Accessible Gaming", "Adaptive Controls", "Universal Design"],
    image: "/images/speakers/speaker-6.jpg",
    pronouns: "he/him"
  }
];

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  
  const openSpeakerModal = (speaker) => {
    setSelectedSpeaker(speaker);
  };
  
  const closeSpeakerModal = () => {
    setSelectedSpeaker(null);
  };
  
  return (
    <section id="speakers" className="speakers section">
      <div className="container">
        <h2 className="section-title">Meet Our Speakers</h2>
        
        <div className="speakers-grid">
          {speakersData.map((speaker) => (
            <div key={speaker.id} className="speaker-card" onClick={() => openSpeakerModal(speaker)}>
              <div className="speaker-image">
                <img src={speaker.image} alt={speaker.name} />
              </div>
              <div className="speaker-info">
                <h3>{speaker.name}</h3>
                <p className="speaker-pronouns">{speaker.pronouns}</p>
                <p className="speaker-role">{speaker.role}</p>
                <p className="speaker-company">{speaker.company}</p>
                <button 
                  className="btn btn-small"
                  aria-label={`View more about ${speaker.name}`}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Diversity statement */}
        <div className="diversity-statement">
          <h3>Our Commitment to Diversity</h3>
          <p>
            Our speakers represent diverse backgrounds, experiences, and perspectives. 
            We believe that inclusive technology starts with inclusive conversations, 
            and we're proud to provide a platform for voices from all communities.
          </p>
        </div>
        
        {/* Speaker modal */}
        {selectedSpeaker && (
          <div className="speaker-modal">
            <div className="modal-content">
              <button 
                className="modal-close" 
                onClick={closeSpeakerModal}
                aria-label="Close speaker profile"
              >
                &times;
              </button>
              
              <div className="modal-body">
                <div className="modal-image">
                  <img src={selectedSpeaker.image} alt={selectedSpeaker.name} />
                </div>
                
                <div className="modal-info">
                  <h3>{selectedSpeaker.name}</h3>
                  <p className="speaker-pronouns">{selectedSpeaker.pronouns}</p>
                  <p className="speaker-role">{selectedSpeaker.role}</p>
                  <p className="speaker-company">{selectedSpeaker.company}</p>
                  
                  <div className="speaker-bio">
                    <h4>About</h4>
                    <p>{selectedSpeaker.bio}</p>
                  </div>
                  
                  <div className="speaker-topics">
                    <h4>Speaking Topics</h4>
                    <ul>
                      {selectedSpeaker.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Speakers;