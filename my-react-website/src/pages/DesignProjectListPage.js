import React from 'react';
import DesignProjectList from '../components/DesignProjectList';
import DesignProjectContent from './DesignProjectContent';

const DesignProjectListPage = () => (
  <>
  <h1 className="page-title">Design</h1>
  <div className="grid-container">
    <DesignProjectList designProjects={DesignProjectContent} />
  </div>
  </>
);

export default DesignProjectListPage;
