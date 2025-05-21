import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

// Lazy load components
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Helmet>
          <title>Viranchi More | Data Analyst</title>
          <meta
            name="description"
            content="I'm a data analyst with 3+ years of experience, showcasing my journey through projects in SQL, Python, machine learning, and data visualization, backed by graduate research at Binghamton University."
          />
          <meta
            name="keywords"
            content="Viranchi More, Data Analyst, Portfolio, Data Analysis, Business Intelligence"
          />
          <meta property="og:title" content="Viranchi More | Data Analyst" />
          <meta
            property="og:description"
            content="Portfolio website of Viranchi More, a Data Analyst specializing in data analysis, visualization, and business intelligence."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://viranchi-more.github.io" />
          <link rel="canonical" href="https://viranchi-more.github.io" />
        </Helmet>
        <GlobalStyles />
        <Navigation />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <ErrorBoundary>
              <Hero />
            </ErrorBoundary>
            <ErrorBoundary>
              <About />
            </ErrorBoundary>
            <ErrorBoundary>
              <Skills />
            </ErrorBoundary>
            <ErrorBoundary>
              <Education />
            </ErrorBoundary>
            <ErrorBoundary>
              <Experience />
            </ErrorBoundary>
            <ErrorBoundary>
              <Projects />
            </ErrorBoundary>
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
            <ErrorBoundary>
              <Footer />
            </ErrorBoundary>
          </Suspense>
        </main>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
