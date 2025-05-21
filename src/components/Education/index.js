import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../../portfolio';

const EducationSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 60%, var(--primary-light) 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--text);
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 600;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const EducationCard = styled(motion.div)`
  background: var(--light);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 200px;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const EducationIcon = styled.div`
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SchoolName = styled.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin: 0;
  font-weight: 600;
`;

const Degree = styled.h4`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin: 0;
  font-weight: 500;
`;

const Duration = styled.p`
  font-size: 0.9rem;
  color: var(--muted);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: "•";
    color: var(--primary);
  }
`;

const GPA = styled.p`
  font-size: 0.9rem;
  color: var(--muted);
  margin: 0;
`;

const Education = () => {
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

  return (
    <EducationSection id="education">
      <Container>
        <Title
          as={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </Title>
        <EducationGrid ref={ref}>
          {education.map((edu, index) => (
            <EducationCard
              key={edu.id}
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <EducationIcon>
                <FaGraduationCap />
              </EducationIcon>
              <SchoolName>{edu.name}</SchoolName>
              <Degree>{edu.description}</Degree>
              {edu.stack.map((item, i) => (
                <Duration key={i}>{item}</Duration>
              ))}
            </EducationCard>
          ))}
        </EducationGrid>
      </Container>
    </EducationSection>
  );
};

export default Education; 