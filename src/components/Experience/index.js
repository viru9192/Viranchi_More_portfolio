import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--primary);
    opacity: 0.2;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding-left: 50px;
  }
`;

const TimelineContent = styled.div`
  background: var(--light);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &:before {
    content: '';
    position: absolute;
    top: 20px;
    width: 20px;
    height: 20px;
    background: var(--primary);
    border-radius: 50%;
    z-index: 1;

    ${props =>
      props.align === 'left'
        ? `
      right: -60px;
    `
        : `
      left: -60px;
    `}

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      left: -40px;
    }
  }

  ${props =>
    props.align === 'left'
      ? `
    grid-column: 1;
  `
      : `
    grid-column: 2;
  `}

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-column: 1;
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  top: 20px;
  width: 40px;
  height: 40px;
  background: var(--background);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  z-index: 2;

  ${props =>
    props.align === 'left'
      ? `
    right: -80px;
  `
      : `
    left: -80px;
  `}

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    left: -60px;
  }
`;

const TimelineDate = styled.span`
  display: block;
  font-size: 0.9rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const TimelineCompany = styled.h4`
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TimelineDescription = styled.p`
  font-size: 1rem;
  color: var(--text);
  line-height: 1.6;
  font-weight: 500;
`;

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineItems = [
    {
      icon: <FaGraduationCap />,
      date: "January 2025 - Present",
      title: "Graduate Research Assistant",
      company: "Binghamton University",
      description: "Conducting research in data analysis and information systems.",
      align: "right"
    },
    {
      icon: <FaBriefcase />,
      date: "June 2023 - June 2024",
      title: "System Engineer",
      company: "Tata Consultancy Services",
      description: "Specialized in SQL optimization, PL/SQL development, and Oracle RDBMS management for State Bank of India.",
      align: "left"
    },
    {
      icon: <FaBriefcase />,
      date: "June 2021 - September 2023",
      title: "Assistant System Engineer",
      company: "Tata Consultancy Services",
      description: "Worked on core banking solutions and data management systems.",
      align: "right"
    },
    {
      icon: <FaBriefcase />,
      date: "August 2020 - October 2020",
      title: "Data Analyst Intern",
      company: "Unschool",
      description: "Analyzed educational data and created visualizations for student performance metrics.",
      align: "left"
    },
    {
      icon: <FaBriefcase />,
      date: "July 2020 - August 2020",
      title: "Data Analyst Intern",
      company: "Cityfurnish",
      description: "Worked on data analysis and reporting for business operations.",
      align: "right"
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

  return (
    <ExperienceSection id="experience">
      <Container>
        <Title
          as={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Background
        </Title>
        <Timeline ref={ref}>
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
            >
              <TimelineContent
                align={item.align}
                as={motion.div}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <TimelineIcon align={item.align}>
                  {item.icon}
                </TimelineIcon>
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineCompany>{item.company}</TimelineCompany>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 