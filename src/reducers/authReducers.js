import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    loginInProgress: false,
    loginError: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        localStorage.removeItem('token');
        return Object.assign({}, state, {
          isLoggedIn: false,
          loginInProgress: true,
          loginError: ''
        });
      case LOGIN_FAILED:
        localStorage.removeItem('token');
        return Object.assign({}, state, {
          isLoggedIn: false,
          loginInProgress: false,
          loginError: 'Invalid Credentials'
        });
      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return Object.assign({}, state, {
          isLoggedIn: true,
          loginInProgress: false,
          loginError: ''
        });
      case LOGOUT_USER:
        localStorage.clear();
        return Object.assign({}, state, {
          isLoggedIn: false,
          loginInProgress: false,
          loginError: ''
        });
      default:
        return state;
    }
};