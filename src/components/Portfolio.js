import React from 'react';
import Project from './Project';
import techBlog from '../assests/techBlog.PNG';
import notesTaker from '../assests/NotesPage.PNG';
import workDay from '../assests/workDayScheduler.PNG';
import storyShare from '../assests/storyshare.gif';
import { Zoom } from "react-awesome-reveal";


function Portfolio() {
  return (
    <section id="portfolio">
      <h2 className="page-title">Portfolio</h2>
      <p>Hover over each screenshot to see the title and description.</p>
      <p>Click on the image to be taken directly to the GitHub </p>
      <div className="project-list">
      <Zoom>
        <Project
          title="StoryShare"
          image={storyShare}
          description="About
          StoryShare is a collaborative writing platform that empowers creative writers to receive writing prompts and share their stories. It provides an immersive space for writers to enhance their writing skills, engage with a vibrant writing community, and foster a love for storytelling."
          liveLink="https://storyshare-33372975577a.herokuapp.com/"
          githubLink="https://github.com/keberlea/storyshare"
        />
        </Zoom>
        <Zoom>
        <Project
          title="Tech Blog"
          image={techBlog}
          description="This project is a developer-focused blog site that provides a platform for tech enthusiasts to share their thoughts, articles, and blog posts. It features a homepage displaying existing blog posts, a login page for account access, and a personal dashboard for managing posts. Users can interact with their own posts, view comments, and leave comments on other posts. The site ensures a secure experience using technologies like MySQL, Sequelize, and session management. It aims to foster a dynamic and supportive environment for developers to connect and share knowledge"
          liveLink="https://techblog-ak-22eff5f469ce.herokuapp.com/"
          githubLink="https://github.com/keberlea/TechBlog"
        />
        </Zoom>
        <Zoom delay="150">
        <Project
          title="Note Taker"
          image={notesTaker}
          description="This note-taking app allows users to create and save notes with titles and text. The notes are stored in a JSON file and can be easily managed. Delete a note by clicking the red garbage can icon."
          githubLink="https://github.com/keberlea/NoteTakerExpressJS"
        />
        </Zoom>
        <Zoom delay="300">
         <Project
          title="Work-Day Scheduler"
          image={workDay}
          description="Work-Day Scheduler allows you to save your daily notes or tasks to local storage and visually differentiates time blocks with background colors indicating past (gray), current (red), and future (green)."
          githubLink="https://github.com/keberlea/workdayschedule"
        />
        </Zoom>
        
      </div>
    </section>
  );
}

export default Portfolio;
