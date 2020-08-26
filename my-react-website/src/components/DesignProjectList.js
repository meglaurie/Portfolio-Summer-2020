import React from 'react';


const DesignProjectList = ({ designProjects }) => (
  <>
  {designProjects.map((designProjects, key) => (
    <div key={key} to={`/designProjects/${designProjects.name}`}>
      <div className="grid-item">
        <h3>{designProjects.title}</h3>
        <img className="projectImg" src={designProjects.image} alt={designProjects.alt}/>
        <p>{designProjects.content[0].substring(0,150)}...</p>
      </div>
    </div>

  ))}
  </>
);

export default DesignProjectList;
