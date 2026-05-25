import React from 'react';
import akportrait from '../assests/akportrait.jpg';
import { Fade } from 'react-awesome-reveal';

const tags = [
  'Snowboarder', 'Skateboarder', 'Hiker', 'Yogi',
  'Fiber Artist', 'B.S. Microbiology', 'Full Stack Dev',
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">

        <Fade direction="left" triggerOnce duration={800}>
          <div className="about-image-wrap">
            <div className="about-image-frame">
              <img
                className="about-image"
                src={akportrait}
                srcSet={`${akportrait} 600w, ${akportrait} 1200w`}
                sizes="(max-width: 600px) 280px, 300px"
                alt="Alicia on Mt. Hood Oregon with a snowboard, wearing a blue shirt and black hat"
              />
            </div>
          </div>
        </Fade>

        <Fade direction="right" triggerOnce delay={120} duration={800}>
          <div className="about-content">
            <span className="section-label">About Me</span>
            <h2 className="about-headline">
              Scientist turned developer,<br />always curious.
            </h2>

            <div className="about-text">
              <p>
                I'm Alicia Keberle — a full-stack developer with a background in pharmaceutical production, cannabinoid extraction, and food production quality control. My scientific mindset shapes how I approach code: methodical, detail-driven, and always looking for elegant solutions.
              </p>
              <p>
                I hold a Bachelor's degree in Microbiology with a minor in Chemistry — a foundation that gives me a natural instinct for precision and analytical thinking that I carry into every project.
              </p>
              <p>
                My passion for development started as curiosity and has grown into a genuine career pursuit. I love the challenges of both front-end and back-end development equally, and I'm committed to continuous learning and staying current with the evolving tech landscape.
              </p>
              <p>
                Outside of code, you'll find me chasing new slopes on a snowboard, exploring skate parks, hiking trails, practicing yoga, or spinning fiber. Connecting with nature and moving creatively keeps me grounded and inspired.
              </p>
            </div>

            <div className="about-tags">
              {tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </Fade>
      </div>

    </section>
    
  );
}

export default About;