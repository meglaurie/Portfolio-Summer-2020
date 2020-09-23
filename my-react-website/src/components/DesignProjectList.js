import React from 'react';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DesignProjectList = ({ designProjects }) => (
  <>
  {designProjects.map((designProjects, key) => (
    <section key={key} to={`/designProjects/${designProjects.name}`}>
      <div className="grid-item">
        <img className="projectImg" src={designProjects.image} alt={designProjects.alt}/>
        <h3 className="project-title">{designProjects.title}</h3>
        <p className="project-desc">{designProjects.content[0]}</p>
        <a className="fa-icon project-icon" target="_blank" rel="noopener noreferrer" aria-label="Codepen external link" href={designProjects.codepen}><FontAwesomeIcon icon={faCodepen} /></a>
        <a className="fa-icon project-icon" target="_blank" rel="noopener noreferrer" aria-label="Dribble external link" href={designProjects.dribbble}><FontAwesomeIcon icon={faDribbble} /></a>
      </div>
    </section>

  ))}
  </>
);

export default DesignProjectList;
