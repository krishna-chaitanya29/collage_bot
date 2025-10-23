import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <FontAwesomeIcon icon={faBrain} className="logo-icon" />
        <span>KMIT AI Assistant</span>
      </div>
      <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
      </button>
      <ul className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
        <li><a href="#faqs" onClick={() => setMobileMenuOpen(false)}>FAQs</a></li>
        <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
        <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
