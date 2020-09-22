import React from 'react';
import ProjectList from '../components/ProjectList';
import ProjectContent from './ProjectContent';
import Footer from '../components/Footer';

const ProjectListPage = () => (
  <>
  <main className="page">
    <h1 className="page-title">Development</h1>
    <div className="grid-container">
      <ProjectList projects={ProjectContent} />
    </div>
  </main>
  </>
);

export default ProjectListPage;
