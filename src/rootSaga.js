import { all } from 'redux-saga/effects';
import landingPageSaga from './pages/LandingPage/saga';
import authSaga from './pages/AuthPage/saga';
import postSaga from './pages/DetailPage/saga';
import newJourneySaga from './pages/NewJourneyPage/saga';
import bookmarkSaga from './pages/BookmarkPage/saga';

export default function* rootSaga() {
  yield all([
    landingPageSaga(),
    authSaga(),
    postSaga(),
    newJourneySaga(),
    bookmarkSaga(),
  ]);
}
