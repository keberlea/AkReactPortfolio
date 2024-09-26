import React from 'react';
import akportrait from '../assests/akportrait.jpg';


function About() {
  return (
    <section id="about">
      <h2 className="page-title">About Me</h2>

      {/* Flex container */}
      <div className="about-container">
        <img
          className="about-image"
          srcSet={`${akportrait} 320w, ${akportrait} 680w, ${akportrait} 960w, ${akportrait} 1280w, ${akportrait} 1920w`}
          src={akportrait}
          alt="Alicia holding a shovel and carrying backpack with snowboard on mt. hood oregon, wearing a blue shirt and black hat"
        />

        <section className="body-text">
        
  
          Hello! My name is Alicia Keberle, and I'm delighted to share more about myself. I have a strong background in pharmaceutical production, cannabinoid extraction and food production quality control. I've had the opportunity to work on various projects and contribute to the development of innovative products and new procedures in analytical testing.
        
        <p>
          Alongside my professional journey, I pursued my passion for learning and obtained a Bachelor's degree in Microbiology with a minor in Chemistry. This academic foundation has equipped me with a solid scientific understanding, which I find valuable in my pursuit of excellence in the tech industry.
        </p>
        <p>
          When I'm not immersed in work or studying, you can often find me pursuing my hobbies and interests. I am an avid snowboarder, constantly seeking new slopes and challenges. Skateboarding has become a new passion of mine, and I enjoy exploring different skate parks and honing my skills. Connecting with nature is essential to me, and I find solace in hiking trails and exploring the great outdoors.
        </p>
        <p>
          Additionally, I am an enthusiast of yoga, finding balance and mindfulness through regular practice. Exploring various fiber arts, such as knitting and spinning fiber, allows me to tap into my creativity and create unique and beautiful pieces.
        </p>
        <p>
          My interest in coding began as a curiosity and has developed into a genuine passion. I find joy in both front-end and back-end development, embracing the challenges that come with each. Continuous learning is a fundamental aspect of my journey, as I am committed to expanding my knowledge and staying up-to-date with the latest technologies and industry trends.
        </p>
        <p>
          My ultimate goal is to contribute to meaningful projects, creating innovative solutions and engaging user experiences. I believe in the power of technology to positively impact lives, and I am excited to be part of this ever-evolving field.
        </p>
        <p>
          Thank you for taking the time to learn more about me. I look forward to connecting with you and exploring new opportunities together!
        </p>
        </section>
      </div>
    </section>
  );
}

export default About;
