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
          title: action.data.title,
          imageUrl: action.data.imageUrl,
          shortDescription: action.data.shortDescription,
          longDescription: action.data.longDescription,
          userId: action.data.userId,
          author: action.data.author,
          date: action.data.date,
          postId: action.data.id,
        };
        draft.bookmarks = [...state.bookmarks, bookmarkedPosts];
        break;
      case REMOVE_BOOKMARK:
        const temp = state.bookmarks.filter((val) => val.id != action.id);
        draft.bookmarks = temp;
        break;
    }
  });
export default bookmarkReducer;
