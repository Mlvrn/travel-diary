import { produce } from 'immer';
import {
  ADD_BOOKMARK,
  GET_BOOKMARKS,
  REMOVE_BOOKMARK,
  SET_BOOKMARKS,
} from './constants';

export const initialState = {
  bookmarks: [],
};

const bookmarkReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_BOOKMARKS:
        break;
      case SET_BOOKMARKS:
        draft.bookmarks = action.posts;
        break;
      case ADD_BOOKMARK:
        const bookmarkedPosts = {
          bookmarkUserId: action.id,
          title: action.post.title,
          imageUrl: action.post.imageUrl,
          shortDescription: action.post.shortDescription,
          longDescription: action.post.longDescription,
          userId: action.post.userId,
          author: action.post.author,
          date: action.post.date,
          postId: action.post.id,
        };
        draft.bookmarks = [...state.bookmarks, bookmarkedPosts];
        break;
      case REMOVE_BOOKMARK:
        const removedBookmark = state.bookmarks.filter(
          (post) => post.id != action.id
        );
        draft.bookmarks = removedBookmark;
        break;
    }
  });
export default bookmarkReducer;
