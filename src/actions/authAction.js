import {
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_USER
  } from './actionTypes';
import { authenticateUser } from '../api/auth';

export const loginSuccess = (response) => {
    // var res = JSON.parse(response);
    return {
        type: LOGIN_SUCCESS,
        payload: {
            token: response.token,
            user: response.user
        }
    };
};

const loginInProgress = () => {
    return { type: LOGIN_USER };
};

const loginFailed = () => {
    return { type: LOGIN_FAILED };
};

const logoutUser = () => {
    return { type: LOGOUT_USER };
};

export const LoginUser = (user, token, cb) => async dispatch => {
    dispatch(loginInProgress());
    try {
      const response = await authenticateUser(user, token);      
      dispatch(loginSuccess(response));
      cb();
    } catch (err) {
      dispatch(loginFailed());
    }
};

export const LogoutUser = cb => dispatch => {
    dispatch(logoutUser());
    cb();
}