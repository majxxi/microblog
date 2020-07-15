import React from 'react';
import PostForm from './Form';
import PostView from './PostView';
import CommentView from './CommentView';
import CommentForm from './CommentForm';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Post() {
  const { postId } = useParams();
  console.log('postId in Post component...', postId);
  const postsObj = useSelector(store => store.posts);
  const thisPost = postsObj[postId];
  return (
    <div>
      <PostForm postId={postId} />
      {/* <PostView />
      <CommentView />
      <CommentForm /> */}
    </div>
  )

}

export default Post;