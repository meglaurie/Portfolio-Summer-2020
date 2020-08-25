import React from 'react';
import DesignProjectList from '../components/DesignProjectList';
import DesignProjectContent from './DesignProjectContent';

const DesignProjectListPage = () => (
  <>
  <h1>Design Projects</h1>
  <DesignProjectList designProjects={DesignProjectContent} />
  </>
);

export default DesignProjectListPage;
