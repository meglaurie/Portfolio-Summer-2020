import React from 'react';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectList = ({ projects }) => (
  <>
  {projects.map((projects, key) => (
    <div key={key} to={`/projects/${projects.name}`}>
        <div className="grid-item">
          <h3>{projects.title}</h3>
          <img className="projectImg" src={projects.image} alt={projects.alt}/>
          <p>{projects.content[0].substring(0,150)}...</p>
          <a className="fa-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/meglaurie"><FontAwesomeIcon icon={faGithubAlt} /></a>
        </div>
    </div>
  ))}
  </>
);

export default ProjectList;
