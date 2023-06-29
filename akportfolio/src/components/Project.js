import React, {useState} from 'react';

function Project(props) {
  const { title, image, description, githubLink } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  }


  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt={title} onClick={() => window.open(githubLink, '_blank')} onMouseEnter={handleHover} onMouseLeave={handleHover} />
        {isHovered && (
          <div className="project-overlay">
          <h3 className="project-title">{title}</h3>
          
        <div className="project-links">
        <p>{description}</p>
         <p><a href={githubLink} target="_blank" rel="noopener noreferrer" hidden="true">
          </a></p>
        </div>
        </div>)
        }
      </div>
      </div>
  );
}

export default Project;


