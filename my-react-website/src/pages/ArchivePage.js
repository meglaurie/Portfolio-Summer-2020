import React from 'react';
import ArchiveList from '../components/ArchiveList';
import ArchiveContent from './ArchiveContent';
import Footer from '../components/Footer';

const ArchivePage = () => (
  <>
  <h1 className="page-title">Archive</h1>
  <div className="arch-grid-container">
    <ArchiveList archive={ArchiveContent} />
  </div>
  <Footer/>
  </>
);


export default ArchivePage;
