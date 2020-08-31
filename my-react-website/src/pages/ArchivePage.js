import React from 'react';
import ArchiveContent from './ArchiveContent';
import NotFoundPage from './NotFoundPage';

const ArchivePage = ({match}) => {

  const name = match.params.name;
  const archive = ArchiveContent.find(archive => archive.name === name);


  if(!archive) return <NotFoundPage />

  return (
    < >
      <h1>{archive.title}</h1>

      {archive.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}

    </>
  );

}

export default ArchivePage;
