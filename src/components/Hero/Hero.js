import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-content" role="banner">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hero-text"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm <span className="highlight">Viranchi More</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="subtitle"
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="description"
        >
          I build exceptional digital experiences that make an impact.
          Specializing in creating beautiful, functional, and user-centered websites.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="hero-buttons"
        >
          <a 
            href="#projects" 
            className="btn primary"
            role="button"
            aria-label="View my projects"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="btn secondary"
            role="button"
            aria-label="Contact me"
          >
            Contact Me
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="social-links"
          role="navigation"
          aria-label="Social media links"
        >
          <a 
            href="https://github.com/viranchi-more" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a 
            href="https://linkedin.com/in/viranchi-more" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a 
            href="https://twitter.com/viranchi_more" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit my Twitter profile"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="hero-image"
        role="img"
        aria-label="Profile picture"
      >
        <div className="profile-placeholder">
          <i className="fas fa-user" aria-hidden="true"></i>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
