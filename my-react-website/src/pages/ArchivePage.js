import React from 'react';
import ArchiveList from '../components/ArchiveList';
import ArchiveContent from './ArchiveContent';

const ArchivePage = () => (
  <>
  <main className="page">
    <h1 className="page-title"><span className="underline">Archive</span></h1>
    <div className="arch-grid-container">
      <ArchiveList archive={ArchiveContent} />
    </div>
  </main>
  </>
);


export default ArchivePage;
