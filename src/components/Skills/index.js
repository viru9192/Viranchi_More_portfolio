/* prettier-ignore */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaDatabase,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaChartBar,
} from "react-icons/fa";
import { SiMysql, SiPostgresql, SiOracle, SiTableau } from "react-icons/si";

const SkillsSection = styled.section`
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
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  align-items: start;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: var(--light);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 100px;
  gap: 1.2rem;
  flex: 1;
  padding: 0.5rem;
  align-items: start;
  min-height: 0;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 0.5rem;
  background: var(--background);
  border-radius: 8px;
  transition: transform 0.3s ease;
  height: 100px;
  width: 100%;
  box-sizing: border-box;
  margin: 0;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 100%;
`;

const SkillName = styled.span`
  font-size: 0.9rem;
  color: var(--text);
  text-align: center;
  line-height: 1.2;
  font-weight: 500;
  height: 1.2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "Data Analysis & Visualization",
      skills: [
        { name: "Power BI", icon: <FaChartBar /> },
        { name: "Tableau", icon: <SiTableau /> },
        { name: "Excel", icon: <FaChartBar /> },
        { name: "Statistics", icon: <FaChartBar /> },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Oracle", icon: <SiOracle /> },
        { name: "MongoDB", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS", icon: <FaAws /> },
      ],
    },
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

  const getSkillItemProps = (skillName) => {
    const longNames = [
      'Statistical Analysis',
      'Machine Learning',
      'Data Visualization',
      'Database Management',
      'Research & Innovation',
      'Data Automation'
    ];
    return {
      longName: longNames.includes(skillName)
    };
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <Title
          as={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </Title>
        <SkillsGrid ref={ref}>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill.name}
                    as={motion.div}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    custom={skillIndex}
                  >
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 