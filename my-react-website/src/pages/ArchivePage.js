import React from 'react';
import ArchiveList from '../components/ArchiveList';
import ArchiveContent from './ArchiveContent';


const ArchivePage = () => (
  <>
  <h1 className="page-title">Archive</h1>
  <div className="grid-container">
    <ArchiveList archive={ArchiveContent} />
  </div>
  </>
);


export default ArchivePage;
