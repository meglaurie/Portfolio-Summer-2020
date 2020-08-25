import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => (
  <>
  {projects.map((projects, key) => (
    <Link key={key} to={`/projects/${projects.name}`}>
      <h3>{projects.title}</h3>
      <img className="projectImg" src={projects.image} />
      <p>{projects.content[0].substring(0,150)}...</p>
    </Link>

  ))}
  </>
);

export default ProjectList;
