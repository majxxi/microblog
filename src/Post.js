import React from 'react';
import PostForm from './Form';
import PostView from './PostView';
import CommentView from './CommentView';
import CommentForm from './CommentForm';

function Post( ){
  return (
    <div>
      <PostForm />
      <PostView />
      <CommentView />
      <CommentForm />
    </div>
  )

}

export default Post;