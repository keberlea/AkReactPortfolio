import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';


function App() {
  const [currentSection, setCurrentSection] = useState('About');

  const sections = ['About', 'Portfolio', 'Contact', 'Resume'];

  const renderSection = () => {
    switch (currentSection) {
      case 'About':
        return <About />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
       <main className="main-content">{renderSection()}</main>
    </div>
  );
}

export default App;
