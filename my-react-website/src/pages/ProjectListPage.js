import React from 'react';
import ProjectList from '../components/ProjectList';
import ProjectContent from './ProjectContent';

const ProjectListPage = () => (
  <>
  <main className="page-body">
    <h1 className="page-title"><span className="underline">Development</span></h1>
    <div className="grid-container">
      <ProjectList projects={ProjectContent} />
    </div>
  </main>
  </>
);

export default ProjectListPage;
