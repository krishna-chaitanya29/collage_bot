import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faRobot, faComments, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
        <div className="grid-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="ai-icons">
          <FontAwesomeIcon icon={faBrain} className="ai-icon brain-icon" />
          <FontAwesomeIcon icon={faRobot} className="ai-icon robot-icon" />
          <FontAwesomeIcon icon={faLightbulb} className="ai-icon bulb-icon" />
        </div>
        <h1 className="hero-title">
          <span className="gradient-text">AI-Powered</span>
          <br />
          <span className="typewriter-text">College Assistant</span>
        </h1>
        <p className="hero-subtitle">Intelligent answers powered by advanced LLM technology</p>
        <p className="hero-description">Get instant answers to all your KMIT questions - from admissions to placements</p>
        <div className="hero-buttons">
          <button className="cta-button primary" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <FontAwesomeIcon icon={faComments} />
            <span>Ask AI Now</span>
          </button>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default HeroSection;
