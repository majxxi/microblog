import {
  ADD_POST, DELETE_POST, UPDATE_POST,
  ADD_COMMENT, DELETE_COMMENT
} from './actionTypes';

const INITIAL_STATE = { posts: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: { ...state.posts, [action.postId]: { ...action.postData, comments: [] } } };
    case DELETE_POST:
      {
        ///alt copy: {...state.posts}
        const postsCopy = Object.assign({}, state.posts);
        delete postsCopy[action.postId];
        return { ...state, posts: postsCopy };
      }
    case UPDATE_POST:
      {
        const postsCopy = Object.assign({}, state.posts);
        postsCopy[action.postId] = {...postsCopy[action.postId], ...action.postData};
        return { ...state, posts: postsCopy };
      }
    case ADD_COMMENT:
      {
        //note: spreading only makes shallow copy; only affects top level
        const postsCopy = Object.assign({}, state.posts);
        const thisPost = {...postsCopy[action.postId], comments: [...postsCopy[action.postId].comments]};
        // do i need to make copy of comments for specific post?
        postsCopy[action.postId] = thisPost;
        thisPost.comments.push(action.commentObj);
        return { ...state, posts: postsCopy };
      }

    case DELETE_COMMENT:
      {
        const postsCopy = Object.assign({}, state.posts);
        const thisPost = {...postsCopy[action.postId]};
        const newComments = thisPost.comments.filter(commentObj => commentObj.id !== action.commentId);
        thisPost.comments = newComments;
        postsCopy[action.postId] = thisPost;
        return { ...state, posts: postsCopy };
      }

    default:
      return state;
  }
}

export default rootReducer;