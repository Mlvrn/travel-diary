import { produce } from 'immer';
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  REGISTER_SUCCESS,
} from './constants';

const initialState = {
  user: null,
  isLoggedIn: false,
  error: null,
};

const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
        draft.user = action.user;
      case LOGIN_SUCCESS:
        draft.user = action.user;
        draft.isLoggedIn = true;
        break;
      case LOGIN_FAILURE:
        draft.error = action.error;
        break;
      case LOGOUT_USER:
        return initialState;
      default:
        return state;
    }
  });

export default authReducer;
