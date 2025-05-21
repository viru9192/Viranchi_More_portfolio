import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 60%, var(--primary-light) 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--text);
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 600;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: var(--light);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  background: var(--primary);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectTag = styled.span`
  font-size: 0.875rem;
  color: var(--primary);
  background: var(--background);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary);
  }
`;

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Job Posting Analyzer – Fake Job Detection System",
      description: "Developed a machine learning pipeline to detect fraudulent job postings using NLP and classification models. Applied TF-IDF vectorization, feature engineering, and SMOTE to handle class imbalance (~95% real vs. 5% fake). XGBoost outperformed other models, achieving ~88% F1-score for fake class and >95% AUC. Deployed as an interactive Streamlit app with real-time predictions, confidence scores, and keyword impact analysis.",
      image: require('../../assets/jd1.jpg'),
      tags: ["Python", "NLP", "Scikit-learn", "XGBoost", "SMOTE", "Streamlit"],
      github: "https://github.com/viru9192/Job_Posting_Analyzer.git",
      demo: "https://job-posting-analyzer.streamlit.app"
    },
    {
      title: "MeToo Twitter Analysis",
      description: "Research paper examining #MeToo Twitter conversations using sentiment and topic modeling on over 390,000 tweets. The study highlights key themes such as personal narratives, public opinions, and the movement's digital evolution.",
      image: require('../../assets/tw1.jpg'),
      tags: ["Python", "NLP", "Sentiment Analysis", "Topic Modeling"],
      github: "https://github.com/viru9192/MeToo-Twitter-Analysis.git",
      demo: "#"
    },
    {
      title: "Olympic Medal Trends Analysis",
      description: "Data analysis project extracting valuable patterns and trends from Olympic data to shed light on medal trends, individual performance, and national accomplishments through in-depth Exploratory Data Analysis (EDA).",
      image: require('../../assets/ol1.jpg'),
      tags: ["Python", "Data Analysis", "EDA", "Visualization"],
      github: "https://github.com/viranchi-more/olympic-analysis",
      demo: "#"
    },
    {
      title: "Survey Application",
      description: "Web-based platform for creating, managing, and participating in surveys. Built with Django backend, PostgreSQL database, and a dynamic frontend using HTML, CSS, and JavaScript.",
      image: require('../../assets/sa1.jpg'),
      tags: ["Django", "PostgreSQL", "JavaScript", "Web Development"],
      github: "https://github.com/pbillava10/TDS537-SurveyApplication.git",
      demo: "#"
    },
    {
      title: "House Price Prediction System",
      description: "Machine learning model to predict housing prices with 80% accuracy using Random Forest. Includes comprehensive EDA, preprocessing techniques, and model evaluation.",
      image: require('../../assets/hp3.jpg'),
      tags: ["Python", "Machine Learning", "Random Forest", "Data Science"],
      github: "https://github.com/viranchi-more/house-price-prediction",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <Title
          as={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </Title>
        <ProjectsGrid ref={ref}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ProjectImage>
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, tagIndex) => (
                    <ProjectTag key={tagIndex}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </ProjectLink>
                  <ProjectLink
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 