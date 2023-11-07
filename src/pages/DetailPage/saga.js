import { call, put, takeLatest } from 'redux-saga/effects';
import { getPostById } from '../../domain/api';
import { setPostById } from './actions';
import { GET_POST_BY_ID } from './constants';

export function* doGetPostById(action) {
  try {
    const response = yield call(getPostById, action.id);
    yield put(setPostById(response));
  } catch (error) {
    console.log('Error fetching post');
  }
}

export default function* postSaga() {
  yield takeLatest(GET_POST_BY_ID, doGetPostById);
}
