import { call, put, takeLatest } from 'redux-saga/effects';
import { createPost } from '../../domain/api';
import { setNewPost } from './actions';
import { CREATE_POST } from './constants';

export function* doCreatePost({ post }) {
  try {
    const response = yield call(createPost, post);
    yield put(setNewPost(response));
  } catch (error) {
    console.log(error, '<<< ERROR');
  }
}

export default function* newJourneySaga() {
  yield takeLatest(CREATE_POST, doCreatePost);
}
