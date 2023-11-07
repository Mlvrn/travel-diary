import { GET_ALL_POST, SET_ALL_POST } from './constants';

export const getAllPost = () => ({
  type: GET_ALL_POST,
});

export const setAllPost = (posts) => ({
  type: SET_ALL_POST,
  posts,
});
