import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';

// membuat store yang mengirimkan reducer
export default createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
