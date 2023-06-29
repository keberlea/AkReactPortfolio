import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/ContactForm';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {
  const [currentSection, setCurrentSection] = useState('About');

  const sections = ['About', 'Portfolio', 'Contact', 'Resume'];

  const renderSection = () => {
    switch (currentSection) {
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
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
       <Footer>
        
       </Footer>
    </div>

  );
}

export default App;
