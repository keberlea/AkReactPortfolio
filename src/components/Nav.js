import React from 'react';

function Nav({ sections = [], setCurrentSection, currentSection }) {
  return (
    <nav aria-label="Main navigation">
      <ul className="nav-list">
        {sections.map((section) => (
          <li key={section} className="nav-item">
            <a
              href={`#${section.toLowerCase()}`}
              onClick={(e) => {
                setCurrentSection(section);
              }}
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