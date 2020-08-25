import React from 'react';
import { Link } from 'react-router-dom';

const DesignProjectList = ({ designProjects }) => (
  <>
  {designProjects.map((designProjects, key) => (
    <Link key={key} to={`/designProjects/${designProjects.name}`}>
      <h3>{designProjects.title}</h3>
      <img className="projectImg" src={designProjects.image} />
      <p>{designProjects.content[0].substring(0,150)}...</p>
    </Link>

  ))}
  </>
);

export default DesignProjectList;
