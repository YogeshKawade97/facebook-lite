import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = () => {
    const store = createStore(
      rootReducer,
      {},
      applyMiddleware(reduxThunk)
    );
  
    return store;
};
  
export default configureStore;