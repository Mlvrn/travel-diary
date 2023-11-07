import { call, put, takeLatest } from 'redux-saga/effects';
import {
  addPostBookmark,
  removePostBookmark,
  getBookmarkedPostsById,
  getBookmarks,
} from '../../domain/api';
import { setBookmarks } from './actions';
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from './constants';
import { GET_ALL_POST } from '../LandingPage/constants';

export function* doGetBookmarks({ id }) {
  try {
    const response = yield call(getBookmarkedPostsById, id);
    yield put(setBookmarks(response));
  } catch (error) {
    console.log('Error getting bookmarks');
  }
}
export function* doAddBookmark({ post }) {
  try {
    const bookmarkedPosts = {
      bookmarkUserId: post.id,
      title: post.title,
      imageUrl: post.imageUrl,
      shortDescription: post.shortDescription,
      description: post.description,
      userId: post.userId,
      author: post.author,
      date: post.date,
      postId: post.id,
    };

    const response = yield call(getBookmarks);
    if (
      !response.filter(
        (post) =>
          post.bookmarkUserId == bookmarkedPosts.bookmarkUserId &&
          post.postId === bookmarkedPosts.postId
      ).length > 0
    ) {
      yield call(addPostBookmark, bookmarkedPosts);
    }
  } catch (error) {
    console.log('Error adding bookmark');
  }
}
export function* doRemoveBookmark(post) {
  try {
    yield call(removePostBookmark, post.id);
  } catch (error) {
    console.log('Error removing bookmark');
  }
}

export default function* bookmarkSaga() {
  yield takeLatest(GET_ALL_POST, doGetBookmarks);
  yield takeLatest(ADD_BOOKMARK, doAddBookmark);
  yield takeLatest(REMOVE_BOOKMARK, doRemoveBookmark);
}
