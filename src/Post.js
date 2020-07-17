import React, { useState, useEffect } from 'react';
import PostForm from './Form';
import PostView from './PostView';
import CommentView from './CommentView';
import CommentForm from './CommentForm';

import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getPostFromAPI, deletePostFromAPI, voteOnPostFromAPI } from './actions';

function Post() {
  const [isEditing, setIsEditing] = useState(false);

  const { postId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const deletePostHelper = postId => {
    dispatch(deletePostFromAPI(postId));
    history.push('/');
  }

  const posts = useSelector(store => store.posts);
  let post = posts[postId];
  console.log(post);

  useEffect(function getPostWhenMounted() {
    async function getPost() {
      dispatch(getPostFromAPI(postId))
    }
    getPost();
  }, [dispatch, postId]);
  // useEffect(() => {
  //   dispatch(getTitleFromAPI(postId)) 
  // }, [dispatch, postId]);

  const voteOnPostHelper = (postId, vote) => {
    dispatch(voteOnPostFromAPI(postId, vote));
  }

  if (post) {
    return (
      <div>
        {isEditing ? <PostForm postId={postId} />
          :
          <>
            <PostView post={post} />
            <div>
              <button onClick={() => { setIsEditing(true) }}>Edit post</button>
              <button onClick={() => deletePostHelper(postId)}>Remove post</button>
              <p>Net Votes: {post.votes}</p>
              <i className="fas fa-thumbs-up mr-2 text-success"
                onClick={() => voteOnPostHelper(post.id, 'up')}></i>
              <i className="fas fa-thumbs-down text-danger"
                onClick={() => voteOnPostHelper(post.id, 'down')}></i>
            </div>
            <hr />
            <CommentView postId={postId} />
            <CommentForm postId={postId} />
          </>

        }
      </div>
    )
  } else {
    return null;
  }

}

export default Post;