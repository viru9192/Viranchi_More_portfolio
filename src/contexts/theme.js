import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const defaultTheme = {
  themeName: 'light',
  toggleTheme: () => {},
};

const ThemeContext = createContext([defaultTheme]);

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    try {
      // Check localStorage first
      const savedTheme = localStorage.getItem('themeName');
      if (savedTheme) return savedTheme;

      // Then check system preference
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      return darkMediaQuery.matches ? 'dark' : 'light';
    } catch (error) {
      console.error('Error initializing theme:', error);
      return 'light'; // Fallback to light theme
    }
  });

  useEffect(() => {
    try {
      // Update localStorage when theme changes
      localStorage.setItem('themeName', themeName);

      // Update document class for global theme
      document.documentElement.className = themeName;

      // Listen for system theme changes
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = e => {
        if (!localStorage.getItem('themeName')) {
          setThemeName(e.matches ? 'dark' : 'light');
        }
      };

      darkMediaQuery.addEventListener('change', handleChange);
      return () => darkMediaQuery.removeEventListener('change', handleChange);
    } catch (error) {
      console.error('Error in theme effect:', error);
    }
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const value = [{ themeName, toggleTheme }];

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
