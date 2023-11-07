import { call, put, takeLatest } from 'redux-saga/effects';
import {
  addPostBookmark,
  removePostBookmark,
  getBookmarkedPostsById,
  getAllPostBookmarks,
} from '../../domain/api';
import { setBookmarks } from './actions';
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from './constants';
import { GET_ALL_POST } from '../LandingPage/constants';

export function* doGetBookmarks({ id }) {
  try {
    const response = yield call(getBookmarkedPostsById, id);
    yield put(setBookmarks(response));
  } catch (error) {
    console.log(error);
  }
}
export function* doAddBookmark(data) {
  try {
    const bookmarkedPosts = {
      bookmarkUserId: data.id,
      title: data.data.title,
      imageUrl: data.data.imageUrl,
      shortDescription: data.data.shortDescription,
      description: data.data.description,
      userId: data.data.userId,
      author: data.data.author,
      date: data.data.date,
      postId: data.data.id,
    };

    const dataBookmark = yield call(getAllPostBookmarks);
    if (
      !dataBookmark.filter(
        (val) =>
          val.bookmarkUserId == bookmarkedPosts.bookmarkUserId &&
          val.postId === bookmarkedPosts.postId
      ).length > 0
    ) {
      yield call(addPostBookmark, bookmarkedPosts);
    }
  } catch (error) {
    console.log(error);
  }
}
export function* doRemoveBookmark(data) {
  try {
    yield call(removePostBookmark, data.id);
  } catch (error) {
    console.log(error);
  }
}

export default function* bookmarkSaga() {
  yield takeLatest(GET_ALL_POST, doGetBookmarks);
  yield takeLatest(ADD_BOOKMARK, doAddBookmark);
  yield takeLatest(REMOVE_BOOKMARK, doRemoveBookmark);
}
