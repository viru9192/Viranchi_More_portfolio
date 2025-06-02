import React from "react";
import PropTypes from "prop-types";
import "../../styles/Education.css";

const Education = ({ education }) => (
  <section id="education" className="education">
    <div className="container">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {education.map((edu) => (
          <div key={edu.id} className="education-item">
            <div className="education-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p className="education-date">
                {edu.startDate} - {edu.endDate}
              </p>
              <p className="education-description">{edu.description}</p>
              {edu.achievements && (
                <ul className="education-achievements">
                  {edu.achievements.map((achievement) => (
                    <li key={`${edu.id}-achievement-${achievement}`}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      achievements: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

Education.defaultProps = {
  education: [
    {
      id: "1",
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of Technology",
      startDate: "2018",
      endDate: "2022",
      description: "Focused on software development, algorithms, and data structures.",
      achievements: [
        "Graduated with First Class Honours",
        "Completed final year project on Machine Learning",
        "Active member of the Computer Science Society",
      ],
    },
    {
      id: "2",
      degree: "Full Stack Web Development Bootcamp",
      institution: "Coding Academy",
      startDate: "2022",
      endDate: "2023",
      description: "Intensive training in modern web development technologies.",
      achievements: [
        "Built 5 full-stack projects",
        "Learned React, Node.js, and MongoDB",
        "Collaborated with peers on group projects",
      ],
    },
  ],
};

export default Education;
