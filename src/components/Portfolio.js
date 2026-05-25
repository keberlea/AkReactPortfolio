import React from 'react';
import Project from './Project';
import { Fade } from 'react-awesome-reveal';
import sonqImg from '../assests/sonq.png';
import tokeativityImg from '../assests/tokeativity.png';
import techBlogImg from '../assests/techBlog.PNG';

const projects = [
  {
    title: 'SONQ Associates',
    image: sonqImg,
    description:
      'Full React build for SONQ Associates — a digital communication strategy agency helping brands give their passion traction. Built from scratch as sole developer: multi-page site with services, FAQ accordion, dual contact form (web + SMS), and animated sections.',
    liveLink: 'https://son-q.com',
    githubLink: null,
    stack: ['React', 'JSX', 'CSS'],
  },
  {
    title: 'Tokeativity® Insights',
    image: tokeativityImg,
    description:
      'Full-stack feedback platform for Tokeativity® — the #1 global cannabis community for women, featured in Rolling Stone and Forbes. Members rate live experiences to help shape future events. Built solo: Vite + TypeScript frontend, MongoDB backend for account creation and auth.',
    liveLink: 'https://insights.tokeativity.com',
    githubLink: null,
    stack: ['Vite', 'TypeScript', 'HTML/CSS', 'MongoDB'],
  },
  {
    title: 'Tech Blog',
    image: techBlogImg,
    description:
      'Developer-focused CMS blog platform with user authentication, personal dashboards, and full CRUD for posts and comments. Built with a MySQL + Sequelize backend and Handlebars templating.',
    githubLink: 'https://github.com/keberlea/TechBlog',
    liveLink: 'https://techblog-ak-22eff5f469ce.herokuapp.com/',
    stack: ['Node.js', 'MySQL', 'Sequelize', 'Handlebars'],
  },
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