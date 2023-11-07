import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_SUCCESS,
  REGISTER_USER,
} from './constants';

export const registerUser = (user) => ({
  type: REGISTER_USER,
  user,
});

export const loginUser = (credentials) => ({
  type: LOGIN_USER,
  credentials,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  user,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});
