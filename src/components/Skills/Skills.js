import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'fab fa-react', description: 'React.js framework' },
      { name: 'JavaScript', icon: 'fab fa-js', description: 'JavaScript programming' },
      { name: 'HTML5', icon: 'fab fa-html5', description: 'HTML5 markup' },
      { name: 'CSS3', icon: 'fab fa-css3-alt', description: 'CSS3 styling' },
      { name: 'TypeScript', icon: 'fab fa-js', description: 'TypeScript programming' },
      { name: 'Redux', icon: 'fas fa-code-branch', description: 'Redux state management' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'fab fa-node-js', description: 'Node.js runtime' },
      { name: 'Python', icon: 'fab fa-python', description: 'Python programming' },
      { name: 'Express', icon: 'fas fa-server', description: 'Express.js framework' },
      { name: 'MongoDB', icon: 'fas fa-database', description: 'MongoDB database' },
      { name: 'PostgreSQL', icon: 'fas fa-database', description: 'PostgreSQL database' },
      { name: 'REST API', icon: 'fas fa-plug', description: 'RESTful API development' },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: 'fab fa-git-alt', description: 'Git version control' },
      { name: 'Docker', icon: 'fab fa-docker', description: 'Docker containerization' },
      { name: 'AWS', icon: 'fab fa-aws', description: 'Amazon Web Services' },
      { name: 'Linux', icon: 'fab fa-linux', description: 'Linux operating system' },
      { name: 'VS Code', icon: 'fas fa-code', description: 'Visual Studio Code' },
      { name: 'Figma', icon: 'fab fa-figma', description: 'Figma design tool' },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills" role="region" aria-label="Skills section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        <h2>Skills</h2>
        <div className="section-line" aria-hidden="true"></div>
      </motion.div>

      <div className="skills-content">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="skill-group"
            role="region"
            aria-label={`${skillGroup.category} skills`}
          >
            <h3>{skillGroup.category}</h3>
            <div className="skills-grid" role="list">
              {skillGroup.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="skill-item"
                  role="listitem"
                  tabIndex="0"
                  aria-label={`${skill.name} - ${skill.description}`}
                >
                  <i className={skill.icon} aria-hidden="true"></i>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
