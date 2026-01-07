import { useState } from 'react';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  if (currentPage === 'about') {
    return (
      <AboutMe 
        isDarkMode={isDarkMode} 
        onBack={() => setCurrentPage('home')} 
      />
    );
  }

  return (
    <Hero 
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
      onNavigateToAbout={() => setCurrentPage('about')}
    />
  );
}