//navigation component
//conditionally renders different sections based on navigation selection
// sections: About me, Portfolio, Contact and Resume
import React from 'react';

function Nav(props) {
  const { sections = [], setCurrentSection, currentSection } = props;

  return (
    <nav>
      <ul className="nav-list">
        {sections.map((section) => (
          <li key={section} className="nav-item">
            <a
              href={`#${section}`}
              onClick={() => setCurrentSection(section)}
              className={currentSection === section ? 'active' : ''}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
