import { combineReducers } from 'redux';
import { AlertReducer } from '../reducers/alert';
import { AuthReducer } from '../reducers/auth';

const rootReducer = combineReducers({
  AlertReducer,
  AuthReducer,
});

export default rootReducer;
