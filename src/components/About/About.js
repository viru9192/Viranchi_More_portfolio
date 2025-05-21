import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const stats = [
  { id: 1, value: '2+', label: 'Years of Experience' },
  { id: 2, value: '20+', label: 'Projects Completed' },
  { id: 3, value: '15+', label: 'Happy Clients' },
];

const About = () => {
  return (
    <div className="about" role="region" aria-label="About me section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        <h2>About Me</h2>
        <div className="section-line" aria-hidden="true"></div>
      </motion.div>

      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="about-text"
        >
          <p>
            I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies.
            My journey in web development started with a curiosity about how things work on the internet, which led me to
            dive deep into the world of programming.
          </p>
          <p>
            I specialize in building modern, responsive web applications using React, Node.js, and various other
            cutting-edge technologies. My approach combines technical expertise with a keen eye for design and user
            experience.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or sharing my knowledge through technical writing and mentoring.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="about-stats"
          role="list"
          aria-label="Professional statistics"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="stat-item"
              role="listitem"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
