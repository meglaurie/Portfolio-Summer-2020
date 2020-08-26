import React from 'react';
import ProjectContent from './ProjectContent';
import NotFoundPage from './NotFoundPage';


const ProjectsPage = ({ match }) => {

  const name = match.params.name;
  const project = ProjectContent.find(project => project.name === name);

// Delete


  if(!project) return <NotFoundPage />


  return (
    < >
      <h1>{project.title}</h1>

      {project.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}

    </>
  );
}

export default ProjectsPage;
