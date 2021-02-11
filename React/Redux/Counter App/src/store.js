import { createStore, combineReducers } from 'redux';
import { reducer as pageStateReducer } from 'redux-pagestate';

const reducer = combineReducers({
  pagestate: pageStateReducer, // mounted under "pagestate"
});

const store = (
  window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore
)(reducer);

export default store;
