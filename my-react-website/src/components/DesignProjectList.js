import React from 'react';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DesignProjectList = ({ designProjects }) => (
  <>
  {designProjects.map((designProjects, key) => (
    <div key={key} to={`/designProjects/${designProjects.name}`}>
      <section className="grid-item">
        <img className="projectImg" src={designProjects.image} alt={designProjects.alt}/>
        <h3 className="project-title">{designProjects.title}</h3>
        <p className="project-desc">{designProjects.content[0]}</p>
        <a className="fa-icon project-icon" target="_blank" rel="noopener noreferrer" href={designProjects.codepen}><FontAwesomeIcon icon={faCodepen} /></a>
        <a className="fa-icon project-icon" target="_blank" rel="noopener noreferrer" href={designProjects.dribbble}><FontAwesomeIcon icon={faDribbble} /></a>
      </section>
    </div>

  ))}
  </>
);

export default DesignProjectList;
