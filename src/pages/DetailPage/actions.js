import { GET_POST_BY_ID, SET_POST_BY_ID } from './constants';

export const getPostById = (id) => ({
  type: GET_POST_BY_ID,
  id,
});

export const setPostById = (post) => ({
  type: SET_POST_BY_ID,
  post,
});
