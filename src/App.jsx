import React, { useState, useEffect } from 'react';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import About from './assets/components/About';
import Speakers from './assets/components/Speakers';
import Schedule from './assets/components/Schedule';
import Footer from './assets/components/Footer';
import AccessibilityPanel from './assets/components/AccessibilityPanel ';
// import AIAssistant from './components/AIAssistant';
import './App.css';

// Context for accessibility settings
import AccessibilityContext from './assets/context/AccessibilityContext';

function App() {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    colorMode: 'normal',
    contrast: 'standard',
    fontSize: 16,
    fontFamily: 'default',
    letterSpacing: 'normal',
    lineSpacing: 'normal',
    animations: true,
  });
  
  // Apply settings whenever they change
  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-base', `${accessibilitySettings.fontSize}px`);
    
    // Reset all classes first
    document.body.className = '';
    
    // Apply settings as classes
    document.body.classList.add(`mode-${accessibilitySettings.colorMode}`);
    document.body.classList.add(`contrast-${accessibilitySettings.contrast}`);
    document.body.classList.add(`font-${accessibilitySettings.fontFamily}`);
    document.body.classList.add(`letter-spacing-${accessibilitySettings.letterSpacing}`);
    document.body.classList.add(`line-spacing-${accessibilitySettings.lineSpacing}`);
    
    if (!accessibilitySettings.animations) {
      document.body.classList.add('reduce-animations');
    }
  }, [accessibilitySettings]);

  return (
    <AccessibilityContext.Provider value={{ accessibilitySettings, setAccessibilitySettings }}>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Footer />
        <AccessibilityPanel />
        {/* <AIAssistant /> */}
      </div>
    </AccessibilityContext.Provider>
  );
}

export default App;