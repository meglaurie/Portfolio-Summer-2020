import React from 'react';
import ArchiveList from '../components/ArchiveList';
import ArchiveContent from './ArchiveContent';
import Footer from '../components/Footer';

const ArchivePage = () => (
  <>
  <section className="page">
    <h1 className="page-title">Archive</h1>
    <div className="arch-grid-container">
      <ArchiveList archive={ArchiveContent} />
    </div>
    <Footer/>
  </section>
  </>
);


export default ArchivePage;
