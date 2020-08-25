import React, { useState, useEffect } from 'react';
import ProjectContent from './ProjectContent';
import NotFoundPage from './NotFoundPage';


const ProjectsPage = ({ match }) => {

  const name = match.params.name;
  const project = ProjectContent.find(project => project.name === name);

// Delete
  const [projectInfo, setProjectInfo] = useState({upvotes: 0, comments:[] });
  useEffect(()=>{
    const fetchData = async () => {
      const result = await fetch (`/api/projects/${name}`);
      const body = await result.json();
      console.log(body);
      setProjectInfo(body);
    }
    fetchData();
  }, [name]);

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
