import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImage from '../../assets/vir1.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--background) 60%, var(--primary-light) 100%);
  position: relative;
  z-index: 1;
  padding: 4rem 1rem;
  box-sizing: border-box;
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ImageWrapper = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 6px 32px rgba(0,0,0,0.12);
  margin-bottom: 2rem;
  background: var(--background);
  flex-shrink: 0;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.2em;
  line-height: 1.2;
`;

const RoleContainer = styled.div`
  min-height: 3rem;
  margin: 1rem 0 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Role = styled(motion.h2)`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  color: var(--primary);
  position: relative;
  text-align: center;
  width: 100%;
  padding: 0 1rem;
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text);
  max-width: 600px;
  margin: 0 auto 2rem;
  padding: 0 1rem;
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled(motion.a)`
  padding: 0.9rem 2.2rem;
  font-size: 1.05rem;
  color: var(--background);
  background: linear-gradient(90deg, var(--primary) 60%, var(--primary-dark) 100%);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 2px 12px rgba(37, 99, 235, 0.08);
  transition: background 0.3s, box-shadow 0.3s;
  &:hover {
    background: linear-gradient(90deg, var(--primary-dark) 60%, var(--primary) 100%);
    box-shadow: 0 4px 24px rgba(37, 99, 235, 0.15);
  }
`;

const ButtonAlt = styled(Button)`
  background: linear-gradient(90deg, var(--secondary) 60%, var(--primary) 100%);
  color: var(--background);
  &:hover {
    background: linear-gradient(90deg, var(--primary) 60%, var(--secondary) 100%);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.7rem;
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  color: var(--text);
  font-size: 2.1rem;
  transition: color 0.2s;
  &:hover {
    color: var(--primary);
  }
`;

const roles = [
  "Data Analyst",
  "SQL Developer",
  "Business Intelligence Analyst",
  "Data Engineer",
  "Data Scientist",
  "BI Developer",
  "Python Developer",
  "Machine Learning Engineer",
  "Data Visualization Expert"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection id="hero">
      <HeroContent>
        <ImageWrapper>
          <ProfileImage 
            src={profileImage}
            alt="Viranchi More profile"
            loading="eager"
          />
        </ImageWrapper>
        <Name
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I&apos;m Viranchi More
        </Name>
        <RoleContainer>
          <AnimatePresence mode="wait">
            <Role
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
            >
              {roles[currentRoleIndex]}
            </Role>
          </AnimatePresence>
        </RoleContainer>
        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          I&apos;m a data analyst with 3+ years of experience, showcasing my journey through projects in SQL, Python, machine learning, and data visualization, backed by graduate research at Binghamton University.
        </Description>
        <ButtonGroup>
          <Button
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </Button>
          <ButtonAlt
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </ButtonAlt>
        </ButtonGroup>
        <SocialLinks>
          <SocialLink
            href="https://github.com/viru9192"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/viranchimore"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/viranchi_more"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Twitter"
          >
            <FaTwitter />
          </SocialLink>
        </SocialLinks>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;