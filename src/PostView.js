import React from 'react';

function PostView( { thisPost, postId }) {
  return (
    <div>
      <h1>{thisPost.title}</h1>
      <h3>{thisPost.description}</h3>
      <p>{thisPost.body}</p>
    </div>
  )
}

export default PostView;