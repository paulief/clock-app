import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const enhancer = applyMiddleware(thunk);

const store = (initialState) => createStore(rootReducer, initialState, enhancer);
export default store;
