import React from 'react';

function CommentForm({addComment}){

  return(
    <div>
      <form onSubmit={addComment}>
        <input type="text" />
        <button type="submit">POST</button>
      </form>
    </div>
  )
}

export default CommentForm;