import {ADD_POST, DELETE_POST, UPDATE_POST} from './actionTypes';

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