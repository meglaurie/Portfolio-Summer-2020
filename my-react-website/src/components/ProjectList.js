import React from 'react';
import { faGithubAlt, faDribbble, faFigma, faCodepen } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectList = ({ projects }) => (
  <>
  {projects.map((projects, key) => (
    <div key={key} to={`/projects/${projects.name}`}>
        <div className="grid-item">
          <img className="projectImg" src={projects.image} alt={projects.alt}/>
          <h3 className="project-title">{projects.title}</h3>
          <p className="project-desc">{projects.content[0]}</p>
          <a className={projects.github === '' ? "display-none" : "fa-icon project-icon"} target="_blank" rel="noopener noreferrer" aria-label="Github external link" href={projects.github}><FontAwesomeIcon icon={faGithubAlt} /></a>
          <a className={projects.dribbble === '' ? "display-none" : "fa-icon project-icon"} target="_blank" rel="noopener noreferrer" aria-label="Dribbble external link" href={projects.drbbble}><FontAwesomeIcon icon={faDribbble} /></a>
          <a className={projects.figma === '' ? "display-none" : "fa-icon project-icon"} target="_blank" rel="noopener noreferrer" aria-label="Figma external link" href={projects.figma}><FontAwesomeIcon icon={faFigma} /></a>
          <a className={projects.codepen === '' ? "display-none" : "fa-icon project-icon"} target="_blank" rel="noopener noreferrer" aria-label="Codepen external link" href={projects.codepen}><FontAwesomeIcon icon={faCodepen} /></a>
        </div>
    </div>
  ))}
  </>
);

export default ProjectList;
