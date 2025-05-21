import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 60%, var(--primary-light) 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0.5rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--text);
  margin-bottom: 1.5rem;
  text-align: left;
  font-weight: 600;
`;

const Bio = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text);
  font-weight: 500;
  margin: 0;
`;

const Expertise = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 0;
`;

const ExpertiseItem = styled(motion.div)`
  background: var(--light);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ExpertiseTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
`;

const ExpertiseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1.2rem;
  flex: 1;
`;

const ExpertiseListItem = styled.li`
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.2;

  &:before {
    content: "•";
    color: var(--primary);
  }
`;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const expertiseItems = [
    {
      title: "Data Analysis & Visualization",
      items: [
        "Power BI",
        "Tableau",
        "Excel",
        "Statistical Analysis",
      ],
    },
    {
      title: "Programming & Development",
      items: [
        "Python",
        "SQL Optimization",
        "PL/SQL Development",
        "Machine Learning",
      ],
    },
    {
      title: "Database & Systems",
      items: [
        "Oracle RDBMS",
        "Core Banking Solutions",
        "Data Management",
        "Performance Optimization",
      ],
    },
    {
      title: "Research & Innovation",
      items: [
        "Sentiment Analysis",
        "Multi-AI Agents",
        "LLM Integration",
        "Data Automation",
      ],
    },
  ];

  return (
    <AboutSection id="about">
      <Container>
        <Grid ref={ref}>
          <Content as={motion.div} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <Title variants={itemVariants}>About Me</Title>
            <Bio>
              <Paragraph variants={itemVariants}>
                Hi, I'm Viranchi More, a Master's student in Information Systems at SUNY Binghamton with 3+ years of experience as a Data Analyst and System Engineer.
              </Paragraph>
              <Paragraph variants={itemVariants}>
                At Tata Consultancy Services, I specialized in SQL optimization, PL/SQL development, and Oracle RDBMS management, enhancing data efficiency and reliability for clients like the State Bank of India.
              </Paragraph>
              <Paragraph variants={itemVariants}>
                I'm proficient in Python, Tableau, Power BI, and statistical analysis, with expertise in machine learning and sentiment analysis, showcased in my research on #MeToo narratives on Twitter.
              </Paragraph>
              <Paragraph variants={itemVariants}>
                I combine technical skills and innovative thinking to optimize workflows, create impactful visualizations, and deliver measurable results.
              </Paragraph>
              <Paragraph variants={itemVariants}>
                Let's transform data into innovation together!
              </Paragraph>
            </Bio>
          </Content>
          <Expertise as={motion.div} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            {expertiseItems.map((item, index) => (
              <ExpertiseItem
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExpertiseTitle>{item.title}</ExpertiseTitle>
                <ExpertiseList>
                  {item.items.map((skill, skillIndex) => (
                    <ExpertiseListItem key={skillIndex}>{skill}</ExpertiseListItem>
                  ))}
                </ExpertiseList>
              </ExpertiseItem>
            ))}
          </Expertise>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About; 