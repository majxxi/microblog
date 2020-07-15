import { ADD_POST, DELETE_POST, UPDATE_POST } from './actionTypes';

const INITIAL_STATE = { posts: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      // method 1
      // let newPost = {};
      // newPost[action.postId] = action.postData;
      // method 2
      // const newPost = {[action.postId]: action.postData };
      return { ...state, posts: {...state.posts, [action.postId]: action.postData}};
    case DELETE_POST:
      {const postsCopy = state.posts;
      delete postsCopy[action.postId];
      return {...state, posts: postsCopy};}
    case UPDATE_POST:
      {const postsCopy = state.posts;
      postsCopy[action.postId] = action.postData;
      return {...state, posts: postsCopy};}
    default:
      return state;
  }
}

export default rootReducer;