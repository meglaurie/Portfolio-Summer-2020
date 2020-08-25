import React from 'react';
import ProjectList from '../components/ProjectList';
import ProjectContent from './ProjectContent';

const ProjectListPage = () => (
  <>
  <h1>Development</h1>
  <ProjectList projects={ProjectContent} />
  </>
);

export default ProjectListPage;
