import React from 'react';
import DesignProjectList from '../components/DesignProjectList';
import DesignProjectContent from './DesignProjectContent';

const DesignProjectListPage = () => (
  <>
  <main className="page">
    <h1 className="page-title"><span className="underline">Design</span></h1>

    <div className="grid-container">
      <DesignProjectList designProjects={DesignProjectContent} />
    </div>
  </main>
  </>
);

export default DesignProjectListPage;
