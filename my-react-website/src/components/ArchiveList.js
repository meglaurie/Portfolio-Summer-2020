import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ArchiveList = ({ archive }) => (
  <>
  {archive.map((archive, key) => (
    <section key={key} to={`/archive/${archive.name}`}>
      <div className="grid-item">
        <h3 className="project-title">{archive.title}</h3>
        <img className="arch-project-img" src={archive.image} alt={archive.alt}/>
        <p className="project-desc">{archive.content[0]}</p>
        <a className="fa-icon project-icon" target="_blank" rel="noopener noreferrer" aria-label="Github external link" href={archive.url}><FontAwesomeIcon icon={faGithub} /></a>
      </div>
    </section>

  ))}
  </>
);

export default ArchiveList;
