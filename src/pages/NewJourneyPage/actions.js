import { CREATE_POST, SET_NEW_POST } from './constants';

export const createPost = (post) => ({
  type: CREATE_POST,
  post,
});

export const setNewPost = (post) => ({
  type: SET_NEW_POST,
  post,
});
