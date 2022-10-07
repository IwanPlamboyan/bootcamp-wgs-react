import { combineReducers } from 'redux';

import counter from './counter';

// mempersiapkan agar mudah mengabungkan beberapa reducer jika nanti ada reducer yang lain
export default combineReducers({ counter });
