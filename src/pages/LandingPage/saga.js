import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_POST } from './constants';

import { setAllPost } from './actions';
import { getAllPosts } from '../../domain/api';

export function* doGetAllPost() {
  try {
    const response = yield call(getAllPosts);
    yield put(setAllPost(response));
  } catch (error) {
    console.log(error, '<<< ERROR');
  }
}

export default function* landingPageSaga() {
  yield takeLatest(GET_ALL_POST, doGetAllPost);
}
