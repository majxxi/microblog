import {
  ADD_POST, DELETE_POST, UPDATE_POST,
  ADD_COMMENT, DELETE_COMMENT
} from './actionTypes';

//post will be obj with: title, description & body keys
//we are expecting postId to be a generated uuid
export function addPost(postId, postData) {
  return {
    type: ADD_POST,
    postId,
    postData
  }
}
export function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  }
}
export function updatePost(postId, postData) {
  return {
    type: UPDATE_POST,
    postId,
    postData
  }
}
// takes postId and add comment to that post
export function addComment(postId, commentObj) {
  return {
    type: ADD_COMMENT,
    postId,
    commentObj
  }
}
export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
  }
}