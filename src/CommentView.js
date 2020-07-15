import React from 'react';

function CommentView (){
  const comments = [];
  // const removeComment = 

  return (
    <div>
      <h5>Comments</h5>
      {comments.map(comment =>
        <div> 
          <button>X</button>
          <p>{comment}</p>
        </div>
      )}
    </div>
  )
}

export default CommentView;