import React from "react";
import { motion } from "framer-motion";
import "../../styles/Experience.css";

const Experience = () => {
  const experience = [
    {
      id: "1",
      position: "Full Stack Developer",
      company: "Freelance",
      startDate: "2023",
      endDate: "Present",
      description: "Working on various web development projects, focusing on creating modern, responsive, and user-friendly applications.",
      responsibilities: [
        "Developed full-stack web applications using React, Node.js, and MongoDB",
        "Implemented responsive designs and modern UI/UX practices",
        "Built RESTful APIs and integrated third-party services",
        "Optimized application performance and implemented best practices",
        "Collaborated with clients to understand requirements and deliver solutions"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "AWS", "Git"],
      icon: "fas fa-code"
    },
    {
      id: "2",
      position: "Web Development Intern",
      company: "Tech Solutions Inc.",
      startDate: "2022",
      endDate: "2023",
      description: "Gained hands-on experience in web development while working on real-world projects.",
      responsibilities: [
        "Assisted in developing and maintaining web applications",
        "Implemented responsive designs using modern CSS frameworks",
        "Worked with REST APIs and database integration",
        "Participated in code reviews and team meetings",
        "Learned and applied best practices in web development"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Git"],
      icon: "fas fa-laptop-code"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My professional journey and the roles I've taken on
        </motion.p>
        <motion.div 
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              variants={itemVariants}
            >
              <div className="experience-icon">
                <i className={exp.icon}></i>
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3>{exp.position}</h3>
                  <h4>{exp.company}</h4>
                  <p className="experience-date">
                    <i className="far fa-calendar-alt"></i> {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <p className="experience-description">{exp.description}</p>
                {exp.responsibilities && (
                  <ul className="experience-responsibilities">
                    {exp.responsibilities.map((responsibility, index) => (
                      <motion.li 
                        key={`${exp.id}-responsibility-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <i className="fas fa-check-circle"></i> {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                )}
                {exp.technologies && (
                  <div className="experience-tech">
                    {exp.technologies.map((tech) => (
                      <motion.span 
                        key={`${exp.id}-tech-${tech}`} 
                        className="tech-tag"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
