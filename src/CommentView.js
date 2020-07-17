import React from 'react';
import {deleteComment} from './actions';
import { useSelector, useDispatch } from 'react-redux';

function CommentView({postId}) {
  const dispatch = useDispatch();
  const comments = useSelector(store => store.posts[postId].comments);
  const deleteCommentHelper = (postId, commentId) => {
    dispatch(deleteComment(postId, commentId));
  }

  return (
    <div>
      <h5>Comments</h5>
      {comments && comments.map(commentObj =>
        <div key={commentObj.id}>
          <button onClick={() => deleteCommentHelper(postId, commentObj.id)}>X</button>
          <p>{commentObj.text}</p>
        </div>
      )}
    </div>
  )
}

export default CommentView;