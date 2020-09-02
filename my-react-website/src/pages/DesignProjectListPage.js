import React from 'react';
import DesignProjectList from '../components/DesignProjectList';
import DesignProjectContent from './DesignProjectContent';
import Footer from '../components/Footer';

const DesignProjectListPage = () => (
  <>
  <h1 className="page-title">Design</h1>
  <div className="grid-container">
    <DesignProjectList designProjects={DesignProjectContent} />
  </div>
  <Footer/>
  </>
);

export default DesignProjectListPage;
