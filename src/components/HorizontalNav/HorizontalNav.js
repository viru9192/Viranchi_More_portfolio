import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import './HorizontalNav.css';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--background);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const NavButton = styled(motion.button)`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  color: var(--text);
  font-weight: 500;
  cursor: pointer;
  position: relative;
  opacity: ${props => props.active ? 1 : 0.7};

  &:hover {
    opacity: 1;
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
`;

const HorizontalNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleScroll = useCallback(() => {
    if (!isScrolling) {
      const scrollPosition = window.scrollY + 70;
      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      })?.id || 'hero';

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    }
  }, [isScrolling, sections, activeSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId) => {
    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(sectionId);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  }, []);

  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContainer>
        {sections.map((section) => (
          <NavButton
            key={section.id}
            active={activeSection === section.id}
            onClick={() => scrollToSection(section.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.label}
            {activeSection === section.id && (
              <ActiveIndicator
                layoutId="activeIndicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </NavButton>
        ))}
      </NavContainer>
    </Nav>
  );
};

export default HorizontalNav; 