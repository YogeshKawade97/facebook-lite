import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { loginSuccess } from './actions/authAction';

const token = localStorage.getItem('token');

const store = configureStore();
if (token) {
  store.dispatch(loginSuccess(token));
  // Code to dispatch other action
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
