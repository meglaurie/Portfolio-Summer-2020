import React from 'react';
import ProjectList from '../components/ProjectList';
import ProjectContent from './ProjectContent';

const ProjectListPage = () => (
  <>
  <h1>Development</h1>
  <div className="grid-container">
    <ProjectList projects={ProjectContent} />
  </div>
  </>
);

export default ProjectListPage;
