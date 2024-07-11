import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import {postsReducer2} from './reducers/postReducer'; // Your root reducer (if multiple reducers)

const store = createStore(
  postsReducer2, // Your root reducer
  applyMiddleware(thunk)
);

export default store;
