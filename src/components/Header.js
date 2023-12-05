//define header component with name "Alicia Keberle" with navigation component 
import React from 'react';
import Nav from './Nav';
import { JackInTheBox } from "react-awesome-reveal";


function Header(props) {
  const { setCurrentSection } = props;

  const sections = ['About', 'Portfolio', 'Contact', 'Resume'];

  return (
    
    <header className="header-container">
      
        <JackInTheBox>
      <h1 className="logo">Alicia Keberle</h1>
        </JackInTheBox>
      <Nav
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={props.currentSection}
      />
    </header>
  );
}

export default Header;
