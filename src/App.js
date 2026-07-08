import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('About');

  return (
    <ThemeProvider>
      <div className="App">
        <Header
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <main>
          <About />
          <Skills />
          <Portfolio />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;