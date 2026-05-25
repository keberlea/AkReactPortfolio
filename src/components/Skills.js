import React from 'react';
import { Fade } from 'react-awesome-reveal';

// Update these lists to reflect your current skill set
const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      'HTML5 & CSS3',
      'JavaScript (ES6+)',
      'React',
      'Apollo / GraphQL',
      'Responsive Design',
      'Progressive Web Apps (PWA)',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Object-Oriented Programming',
      'MVC Architecture',
    ],
  },
  {
    category: 'Databases',
    skills: [
      'MySQL',
      'MongoDB / NoSQL',
      'Sequelize (ORM)',
      'SQL Queries',
    ],
  },
  {
    category: 'Tools & Stacks',
    skills: [
      'Git & GitHub',
      'MERN Stack',
      'Command Line',
      'Third-Party APIs',
      'State Management (React)',
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-label">What I work with</span>
        <h2 className="section-title">Skills</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <Fade key={group.category} direction="up" delay={i * 80} triggerOnce duration={700}>
            <div className="skill-group">
              <h4>{group.category}</h4>
              <ul className="skill-list">
                {group.skills.map(skill => (
                  <li key={skill} className="skill-item">
                    <span className="skill-dot" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}

export default Skills;