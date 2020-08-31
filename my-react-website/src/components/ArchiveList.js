import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ArchiveList = ({ archive }) => (
  <>
  {archive.map((archive, key) => (
    <div key={key} to={`/archive/${archive.name}`}>
      <div className="grid-item">
        <h3 className="project-title">{archive.title}</h3>
        <img className="arch-project-img" src={archive.image} alt={archive.alt}/>
        <p className="project-desc">{archive.content[0].substring(0,150)}...</p>
        <a className="fa-icon project-icon" target="_blank" rel="noopener noreferrer" href={archive.url}><FontAwesomeIcon icon={faGithub} /></a>
      </div>
    </div>

  ))}
  </>
);

export default ArchiveList;
