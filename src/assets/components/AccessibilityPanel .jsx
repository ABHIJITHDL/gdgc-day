import React, { useState, useContext } from 'react';
import  AccessibilityContext  from '../context/AccessibilityContext';
import '../styles/AccessibilityPanel.css';

const AccessibilityPanel = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const { accessibilitySettings, setAccessibilitySettings } = useContext(AccessibilityContext);
  
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);
  
  const updateSetting = (key, value) => {
    setAccessibilitySettings({
      ...accessibilitySettings,
      [key]: value
    });
  };
  
  const resetSettings = () => {
    setAccessibilitySettings({
      colorMode: 'normal',
      contrast: 'standard',
      fontSize: 16,
      fontFamily: 'default',
      letterSpacing: 'normal',
      lineSpacing: 'normal',
      animations: true,
    });
  };
  
  // Text-to-speech for the whole page
  const speakPage = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Get all text from the page, excluding the accessibility panel
      const pageText = document.body.innerText.replace(
        document.querySelector('.accessibility-container').innerText, 
        ''
      );
      
      const utterance = new SpeechSynthesisUtterance(pageText);
      
      // Try to get a natural sounding voice
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.name.includes('Google') || 
        voice.name.includes('Premium') || 
        voice.name.includes('Natural')
      );
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      window.speechSynthesis.speak(utterance);
    }
  };
  
  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div className="accessibility-container">
      <button 
        className="accessibility-toggle" 
        onClick={togglePanel}
        aria-expanded={isPanelOpen}
        aria-label="Toggle accessibility panel"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Accessibility</span>
      </button>
      
      {isPanelOpen && (
        <div className="accessibility-panel">
          <div className="accessibility-header">
            <h3>Accessibility Options</h3>
            <button 
              className="accessibility-close" 
              onClick={togglePanel}
              aria-label="Close accessibility panel"
            >
              &times;
            </button>
          </div>
          
          <div className="setting-group">
            <label htmlFor="colorMode">Color Mode</label>
            <select 
              id="colorMode"
              value={accessibilitySettings.colorMode}
              onChange={(e) => updateSetting('colorMode', e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="deuteranopia">Deuteranopia (Red-Green)</option>
              <option value="protanopia">Protanopia (Red)</option>
              <option value="tritanopia">Tritanopia (Blue-Yellow)</option>
              <option value="monochrome">Monochrome</option>
            </select>
          </div>
          
          <div className="setting-group">
            <label htmlFor="contrast">Contrast</label>
            <select 
              id="contrast"
              value={accessibilitySettings.contrast}
              onChange={(e) => updateSetting('contrast', e.target.value)}
            >
              <option value="standard">Standard</option>
              <option value="high">High Contrast</option>
              <option value="dark">Dark Mode</option>
              <option value="light">Light Mode</option>
              <option value="sepia">Sepia</option>
            </select>
          </div>
          
          <div className="setting-group">
            <label htmlFor="fontSize">
              Font Size: {accessibilitySettings.fontSize}px
            </label>
            <input 
              id="fontSize"
              type="range" 
              min="12" 
              max="24" 
              value={accessibilitySettings.fontSize}
              onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
            />
            <div className="font-size-buttons">
              <button 
                onClick={() => updateSetting('fontSize', Math.max(12, accessibilitySettings.fontSize - 1))}
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button 
                onClick={() => updateSetting('fontSize', Math.min(24, accessibilitySettings.fontSize + 1))}
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
          </div>
          
          <div className="setting-group">
            <label htmlFor="fontFamily">Font Type</label>
            <select 
              id="fontFamily"
              value={accessibilitySettings.fontFamily}
              onChange={(e) => updateSetting('fontFamily', e.target.value)}
            >
              <option value="default">Default</option>
              <option value="dyslexic">Dyslexia-friendly</option>
              <option value="serif">Serif</option>
              <option value="sans">Sans-serif</option>
            </select>
          </div>
          
          <div className="setting-group">
            <label htmlFor="letterSpacing">Letter Spacing</label>
            <select 
              id="letterSpacing"
              value={accessibilitySettings.letterSpacing}
              onChange={(e) => updateSetting('letterSpacing', e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="wide">Wide</option>
              <option value="wider">Wider</option>
            </select>
          </div>
          
          <div className="setting-group">
            <label htmlFor="lineSpacing">Line Spacing</label>
            <select 
              id="lineSpacing"
              value={accessibilitySettings.lineSpacing}
              onChange={(e) => updateSetting('lineSpacing', e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="wide">Wide</option>
              <option value="wider">Wider</option>
            </select>
          </div>
          
          <div className="setting-group setting-checkbox">
            <input 
              id="animations"
              type="checkbox" 
              checked={accessibilitySettings.animations}
              onChange={(e) => updateSetting('animations', e.target.checked)}
            />
            <label htmlFor="animations">Enable Animations</label>
          </div>
          
          <div className="tts-controls">
            <button onClick={speakPage} className="tts-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.54 8.46C16.4774 9.39764 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Read Page Aloud</span>
            </button>
            <button onClick={stopSpeech} className="tts-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Stop Reading</span>
            </button>
          </div>
          
          <button onClick={resetSettings} className="reset-button">
            Reset All Settings
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityPanel;