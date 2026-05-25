import React from 'react';
import resumePDF from '../assests/resume25.pdf';

function Resume() {
    const frontEndSkills = [
        'HTML',
        'JavaScript',
        'Git',
        'APIs (web APIs, third-party APIs)',
        'Apollo (GraphQL client)'
      ];
    
      const backEndSkills = [
        'SQL',
        'NoSQL',
        'MySQL (Relational database management system)',
        'Node.js',
        'Express.js',
        'Object Oriented Programming',
        'Object Relational Mapping (ORM)'
      ];
    
      const webDevSkills = [
        'Model View Controller (MVC)',
        'MERN (MongoDB, Express.js, React, Node.js)'
      ];
    
      const additionalSkills = [
        'Progressive Web Applications (PWA)',
        'State (in the context of React)'
      ];

    return(
        <section id="resume">
            <h2 className="page-title">Tech Resume</h2>
            
            {/* PDF Download/View Section */}
            <div className="resume-pdf-section">
                <a 
                    href={resumePDF} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="resume-button"
                >
                    📄 View Full Resume
                </a>
                <a 
                    href={resumePDF} 
                    download="Alicia_Keberle_Resume.pdf" 
                    className="resume-button download"
                >
                    ⬇️ Download Resume
                </a>
            </div>

            <section className="body-text">
                <h4>Front-End Development</h4>
                <ul>
                {frontEndSkills.map((skill, index) => (
                    <li key={`frontEndSkill-${index}`}>{skill}</li>
                ))}
                </ul>

                <h4>Back-End Development</h4>
                <ul>
                {backEndSkills.map((skill, index) => (
                    <li key={`backEndSkill-${index}`}>{skill}</li>
                ))}
                </ul>

                <h4>Web Development Frameworks/Architectures</h4>
                <ul>
                {webDevSkills.map((skill, index) => (
                    <li key={`webDevSkill-${index}`}>{skill}</li>
                ))}
                </ul>

                <h4>Additional Concepts</h4>
                <ul>
                {additionalSkills.map((skill, index) => (
                    <li key={`additionalSkill-${index}`}>{skill}</li>
                ))}
                </ul>

            </section> 
        </section>
    );
}

export default Resume;