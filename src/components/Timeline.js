import React from 'react';
import { Fade } from 'react-awesome-reveal';

// ── Fill in your real experience here ──────────────────────
// For each item: date, title, org, description
// Items alternate left/right on desktop, stack vertically on mobile
const experiences = [
  {
    date: '2023 — Present',
    title: 'Full Stack Developer',
    org: 'Freelance & Personal Projects',
    description:
      'Building responsive web applications using the MERN stack. Developing RESTful APIs, integrating third-party services, and crafting engaging user experiences with React.',
  },
  {
    date: '2022 — 2023',
    title: 'Full Stack Bootcamp Graduate',
    org: 'Coding Bootcamp',         // ← Update with your actual school name
    description:
      'Completed an intensive full-stack development program covering JavaScript, React, Node.js, SQL, MongoDB, REST APIs, and modern web development best practices.',
  },
  {
    date: '20XX — 20XX',            // ← Fill in your dates
    title: 'Quality Control Analyst',
    org: 'Company Name',             // ← Fill in your employer
    description:
      'Managed quality control processes in pharmaceutical production and cannabinoid extraction. Developed new analytical testing procedures and contributed to innovative product development.',
  },
  {
    date: '20XX — 20XX',            // ← Fill in your graduation year(s)
    title: 'B.S. Microbiology, Minor in Chemistry',
    org: 'University Name',          // ← Fill in your school
    description:
      'Built a strong scientific foundation in analytical methods, laboratory research, and data-driven problem solving — skills I bring directly into software development.',
  },
];

function Timeline() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <span className="section-label">My journey</span>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <Fade
            key={i}
            direction={i % 2 === 0 ? 'left' : 'right'}
            delay={i * 80}
            triggerOnce
            duration={700}
          >
            <div className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <p className="timeline-date">{exp.date}</p>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-org">{exp.org}</p>
              <p className="timeline-desc">{exp.description}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}

export default Timeline;