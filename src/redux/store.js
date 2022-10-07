import { createStore } from 'redux';
import rootReducer from './reducers';

// membuat store yang mengirimkan reducer
export default createStore(rootReducer);
