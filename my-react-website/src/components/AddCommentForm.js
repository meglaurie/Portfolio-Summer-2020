import React, { useState } from 'react';

const AddCommentForm = ({projectName, setProjectInfo}) => {
  const [username, setUsername] = useState('');
  const [commentText, setCommentText ] = useState('');
  const [useremail, setUseremail] = useState('');

  const addComment = async () => {
    const result = await fetch(`/api/projects/${projectName}/add-comment`, {
      method: 'post',
      body: JSON.stringify({ username, useremail, text: commentText}),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const body = await result.json();
    setProjectInfo(body);
    setUsername('');
    setUseremail('');
    setCommentText('');
  }
  return(
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input type="text" value = {username} onChange= {(event) => setUsername(event.target.value)}/>
      </label>
      <label>
        Email:
        <input type="text" value = {useremail} onChange={(event) => setUseremail(event.target.value)}/>
      </label>
      <label>
        Comments:
        <textarea rows ="4" cols="50" value= {commentText} onChange= {(event) => setCommentText(event.target.value)}/>
      </label>
      <button onClick={()=>addComment()}>Submit</button>
    </div>
  )
};

export default AddCommentForm;
