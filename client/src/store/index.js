import { combineReducers } from 'redux';
import { AlertReducer } from '../reducers/alert';
import { AuthReducer } from '../reducers/auth';
import { ProfileReducer } from '../reducers/profile';

const rootReducer = combineReducers({
  AlertReducer,
  AuthReducer,
  ProfileReducer,
});

export default rootReducer;
