import { combineReducers } from 'redux';
import landingPageReducer from './pages/LandingPage/reducer';
import authReducer from './pages/AuthPage/reducer';
import postReducer from './pages/DetailPage/reducer';
import newJourneyReducer from './pages/NewJourneyPage/reducer';
import bookmarkReducer from './pages/BookmarkPage/reducer';

const rootReducer = combineReducers({
  landingPageReducer: landingPageReducer,
  authReducer: authReducer,
  postReducer: postReducer,
  newJourneyReducer: newJourneyReducer,
  bookmarkReducer: bookmarkReducer,
});

export default rootReducer;
