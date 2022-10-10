import { combineReducers } from 'redux';

import counter from './counter';
import postReducer from './postsReducer';
import userReducer from './userReducer';

// mempersiapkan agar mudah mengabungkan beberapa reducer jika nanti ada reducer yang lain
export default combineReducers({
  counter,
  posts: postReducer,
  users: userReducer,
});
