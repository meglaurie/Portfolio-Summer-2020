import React from 'react';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ArchiveList = ({ archive }) => (
  <>
  {archive.map((archive, key) => (
    <div key={key} to={`/archive/${archive.name}`}>
      <div className="grid-item">
        <h3 className="project-title">{archive.title}</h3>
        <img className="projectImg" src={archive.image} alt={archive.alt}/>
        <p className="project-desc">{archive.content[0].substring(0,150)}...</p>
        <a className="fa-icon project-icon" target="_blank" rel="noopener noreferrer" href="https://codepen.io/mlaur568"><FontAwesomeIcon icon={faCodepen} /></a>
        <a className="fa-icon project-icon" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/mlaurie"><FontAwesomeIcon icon={faDribbble} /></a>
      </div>
    </div>

  ))}
  </>
);

export default ArchiveList;
