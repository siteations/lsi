
import { combineReducers } from 'redux';

import { userReducer } from './userActions';
import { adminReducer } from './adminActions';
import { paneReducer } from './paneActions';
import {navReducer} from './navActions.js';
import { searchReducer} from './searchActions.js';
//just prepping for files, may or may not need immutable with db complexity


export default combineReducers({
  user: userReducer,
  admin: adminReducer,
  pane: paneReducer,
  nav: navReducer,
  refer: searchReducer,
});


