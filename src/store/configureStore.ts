import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './reducers';
import initialState from './initialState';

export const store = createStore(appReducer, initialState, applyMiddleware(thunk));
