import { combineReducers } from 'redux';
import { AlertReducer } from '../reducers/alert';
import { AuthReducer } from '../reducers/auth';
import { ProfileReducer } from '../reducers/profile';
import { PostReducer } from '../reducers/post';

const rootReducer = combineReducers({
  AlertReducer,
  AuthReducer,
  ProfileReducer,
  PostReducer,
});

export default rootReducer;
