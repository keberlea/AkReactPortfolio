import React from 'react';
import Project from './Project';
import techBlog from '../assests/techBlog.PNG';
import notesTaker from '../assests/NotesPage.PNG';
import workDay from '../assests/workDayScheduler.PNG';
import { Fade } from 'react-awesome-reveal';

// ── Add your projects here ──────────────────────────────────
const projects = [
  {
    title: 'Tech Blog',
    image: techBlog,
    description:
      'A developer-focused CMS blog platform where tech enthusiasts can share articles and interact through comments. Features user authentication, personal dashboards, and full CRUD for posts.',
    githubLink: 'https://github.com/keberlea/TechBlog',
    liveLink: 'https://techblog-ak-22eff5f469ce.herokuapp.com/',
    stack: ['Node.js', 'MySQL', 'Sequelize', 'Handlebars'],
  },
  {
    title: 'Note Taker',
    image: notesTaker,
    description:
      'A clean note-taking app with an Express.js backend that persists notes to a JSON file. Supports creating, viewing, and deleting notes through a simple, intuitive interface.',
    githubLink: 'https://github.com/keberlea/NoteTakerExpressJS',
    liveLink: null,
    stack: ['Express.js', 'Node.js', 'JSON Storage'],
  },
  {
    title: 'Work-Day Scheduler',
    image: workDay,
    description:
      'A daily planner that saves tasks to local storage and color-codes time blocks to indicate past, current, and future hours — keeping your day organized at a glance.',
    githubLink: 'https://github.com/keberlea/workdayschedule',
    liveLink: null,
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
  // ── Add more projects below ──────────────────────────────
  // {
  //   title: 'Your Next Project',
  //   image: yourImage,
  //   description: 'Description here.',
  //   githubLink: 'https://github.com/keberlea/...',
  //   liveLink: 'https://...',
  //   stack: ['React', 'Node.js'],
  // },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="section-header">
        <span className="section-label">Selected work</span>
        <h2 className="section-title">Portfolio</h2>
      </div>

      <div className="container">
        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <Fade key={project.title} direction="up" delay={i * 100} triggerOnce duration={700}>
              <Project {...project} />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;