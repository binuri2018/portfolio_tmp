import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import './App.css';
import Contact from './components/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="App">
      <Navigation onThemeToggle={toggleTheme} isDarkMode={isDarkMode} userData={portfolioData.hero} />
      <main className="main-content">
        <Hero heroData={portfolioData.hero} />
        <About aboutData={portfolioData.about} />
        <Education educationData={portfolioData.education} />
        <Skills skillsData={portfolioData.skills} />
        <Projects projectsData={portfolioData.projects} />
        <Contact cotactData={portfolioData.contact} />
        <Footer footerData={portfolioData.footer} />
      </main>
    </div>
  );
}

export default App;
