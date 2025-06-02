import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: "1",
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills and projects. Features dark/light theme, smooth animations, and a contact form.",
      image: "/images/portfolio.png",
      technologies: ["React", "CSS3", "JavaScript", "Framer Motion"],
      github: "https://github.com/viranchi-more/portfolio",
      demo: "https://viranchi-more.github.io/portfolio",
      featured: true
    },
    {
      id: "2",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
      image: "/images/ecommerce.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/viranchi-more/ecommerce",
      demo: "https://ecommerce-demo.herokuapp.com",
      featured: true
    },
    {
      id: "3",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team features, and progress tracking.",
      image: "/images/task-manager.png",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      github: "https://github.com/viranchi-more/task-manager",
      demo: "https://task-manager-demo.herokuapp.com",
      featured: true
    },
    {
      id: "4",
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data, forecasts, and interactive maps using OpenWeather API.",
      image: "/images/weather.png",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      github: "https://github.com/viranchi-more/weather-dashboard",
      demo: "https://weather-dashboard-demo.herokuapp.com",
      featured: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".project-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of my recent works. Each project is a unique piece of development.
        </motion.p>
        <div className="projects-grid">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="project-link github"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className="project-link demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={`${project.id}-tech-${tech}`} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
