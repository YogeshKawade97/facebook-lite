import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    loginInProgress: false,
    loginError: '',
    token: '',
    user: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        // localStorage.removeItem('token');
        // localStorage.removeItem('user');
        return Object.assign({}, state, {
          isLoggedIn: false,
          loginInProgress: true,
          loginError: ''
        });
      case LOGIN_FAILED:
        // localStorage.removeItem('token');
        // localStorage.removeItem('user');
        return Object.assign({}, state, {
          isLoggedIn: false,
          loginInProgress: false,
          loginError: 'Invalid Credentials'
        });
      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', action.payload.user);
        return Object.assign({}, state, {
          isLoggedIn: true,
          loginInProgress: false,
          loginError: '',
          token: action.payload.token,
          user: action.payload.user
        });
      case LOGOUT_USER:
        localStorage.clear();
        return Object.assign({}, state, {
          isLoggedIn: false,
          loginInProgress: false,
          loginError: '',
          token: '',
          user: ''
        });
      default:
        return state;
    }
};