import React from 'react';

const UpvotesSection = ({ projectName, upvotes, setProjectInfo}) => {

  const upvoteProject = async () => {
    const result =  await fetch(`/api/projects/${projectName}/upvote`, {
      method: 'post',

    });
    const body = await result.json();
    setProjectInfo(body);
  }
  return (
    <div id="upvotes-section">
      <button onClick={() => upvoteProject() }>Add Upvote</button>
      <p>This project has been upvoted {upvotes} times</p>
    </div>
);
}

export default UpvotesSection;
