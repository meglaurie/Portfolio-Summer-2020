import React, { useState, useEffect } from 'react';
import ProjectContent from './ProjectContent';
import ProjectList from '../components/ProjectList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
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

  const otherProjects = ProjectContent.filter(project => project.name !== name);

  return (
    < >
      <h1>{project.title}</h1>

      <UpvotesSection projectName = { name } upvotes={projectInfo.upvotes} setProjectInfo={setProjectInfo}/>

      {project.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments ={projectInfo.comments} />
      <AddCommentForm projectName ={name} setProjectInfo={setProjectInfo}/>
      <h3>Other Projects:</h3>
      <ProjectList projects={otherProjects} />
    </>
  );
}

export default ProjectsPage;
