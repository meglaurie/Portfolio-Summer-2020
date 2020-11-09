import React from 'react';
import { faGithubAlt, faDribbble, faFigma } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectList = ({ projects }) => (
  <>
  {projects.map((projects, key) => (
    <div key={key} to={`/projects/${projects.name}`}>
        <div className="grid-item">
          <img className="projectImg" src={projects.image} alt={projects.alt}/>
          <h3 className="project-title">{projects.title}</h3>
          <p className="project-desc">{projects.content[0]}</p>
          <a className={projects.url === '' ? "display-none" : "fa-icon project-icon"} target="_blank" rel="noopener noreferrer" aria-label="Github external link" href={projects.url}><FontAwesomeIcon icon={faGithubAlt} /></a>
          <a className={projects.url2 === '' ? "display-none" : "fa-icon project-icon"} target="_blank" rel="noopener noreferrer" aria-label="Dribbble external link" href={projects.url2}><FontAwesomeIcon icon={faDribbble} /></a>
          <a className={projects.url3 === '' ? "display-none" : "fa-icon project-icon"} target="_blank" rel="noopener noreferrer" aria-label="Dribbble external link" href={projects.url3}><FontAwesomeIcon icon={faFigma} /></a>
        </div>
    </div>
  ))}
  </>
);

export default ProjectList;
