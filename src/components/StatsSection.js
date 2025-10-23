import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faChalkboardTeacher, faBrain } from '@fortawesome/free-solid-svg-icons';
import "./StatsSection.css";

function StatsSection() {
  return (
    <section className="stats-section" id="about">
      <div className="stats-container">
        <h2 className="stats-title">Powered by Advanced AI Technology</h2>
        <p className="stats-subtitle">Real-time intelligence for your college questions</p>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <FontAwesomeIcon icon={faUsers} className="stat-icon" />
            </div>
            <h3 className="stat-number" data-target="10000">10K+</h3>
            <p className="stat-label">Students Helped</p>
            <div className="stat-glow"></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <FontAwesomeIcon icon={faChartLine} className="stat-icon" />
            </div>
            <h3 className="stat-number" data-target="95">95%</h3>
            <p className="stat-label">Accuracy Rate</p>
            <div className="stat-glow"></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="stat-icon" />
            </div>
            <h3 className="stat-number" data-target="200">200+</h3>
            <p className="stat-label">Faculty Profiles</p>
            <div className="stat-glow"></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <FontAwesomeIcon icon={faBrain} className="stat-icon" />
            </div>
            <h3 className="stat-number" data-target="1000">1K+</h3>
            <p className="stat-label">Questions Answered Daily</p>
            <div className="stat-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
