import {
  ADD_BOOKMARK,
  GET_BOOKMARKS,
  REMOVE_BOOKMARK,
  SET_BOOKMARKS,
} from './constants';

export const getBookmarks = (id) => ({ type: GET_BOOKMARKS, id });
export const setBookmarks = (posts) => ({
  type: SET_BOOKMARKS,
  posts,
});
export const addBookmark = (data, id) => ({
  type: ADD_BOOKMARK,
  data,
  id,
});
export const removeBookmark = (id) => ({
  type: REMOVE_BOOKMARK,
  id,
});
