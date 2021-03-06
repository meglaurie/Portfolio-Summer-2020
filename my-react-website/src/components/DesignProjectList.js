import React from 'react';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DesignProjectList = ({ designProjects }) => (

  <>
  {designProjects.map((designProjects, key) => (
    <section key={key} to={`/designProjects/${designProjects.name}`}>
      <div className="grid-item">
        <img className="projectImg" src={designProjects.image} alt={designProjects.alt}/>
        <h3 className="project-title">{designProjects.title}</h3>
        <p className="project-desc">{designProjects.content[0]}</p>
        <a className={designProjects.codepen === '' ? "display-none" : "fa-icon project-icon" } target="_blank" rel="noopener noreferrer" aria-label="Codepen external link" href={designProjects.codepen}><FontAwesomeIcon icon={faCodepen} /></a>
        <a className={designProjects.dribbble === '' ? "display-none" : "fa-icon project-icon" } target="_blank" rel="noopener noreferrer" aria-label="Dribble external link" href={designProjects.dribbble}><FontAwesomeIcon icon={faDribbble} /></a>
        <a className={designProjects.figma === '' ? "display-none" : "fa-icon project-icon"} target="_blank" rel="noopener noreferrer" aria-label="Figma external link" href={designProjects.figma}><FontAwesomeIcon icon={faFigma} /></a>
        <a className={designProjects.github === '' ? "display-none" : "fa-icon project-icon" } target="_blank" rel="noopener noreferrer" aria-label="Codepen external link" href={designProjects.github}><FontAwesomeIcon icon={faGithubAlt} /></a>
      </div>
    </section>

  ))}
  </>
);

export default DesignProjectList;
