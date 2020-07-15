import React, { useState } from 'react';
import PostForm from './Form';
import PostView from './PostView';
import CommentView from './CommentView';
import CommentForm from './CommentForm';

import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from './actions';

function Post() {
  const [isEditing, setIsEditing] = useState(false);

  const { postId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const deletePostHelper = postId => {
    dispatch(deletePost(postId));
    history.push('/');
  }

  const postsObj = useSelector(store => store.posts);
  const thisPost = postsObj[postId];

  return (
    <div>
      {isEditing ? <PostForm postId={postId} />
        :
        <>
          <div>
            <button onClick={() => { setIsEditing(true) }}>Edit post</button>
            <button onClick={() => deletePostHelper(postId)}>Remove post</button>
          </div>
          <PostView thisPost={thisPost} />
          <hr />
          <CommentView />
          <CommentForm />
        </>

      }
    </div>
  )

}

export default Post;