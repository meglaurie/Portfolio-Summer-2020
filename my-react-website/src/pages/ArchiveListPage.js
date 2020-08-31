import React from 'react';
import ArchiveList from '../components/ArchiveList';
import ArchiveContent from './ArchiveContent';


const ArchiveListPage = () => (
  <>
  <h1 className="page-title">Development</h1>
  <div className="grid-container">
    <ArchiveList archive={ArchiveContent} />
  </div>
  </>
);

export default ArchiveListPage;
