import {combineReducers} from 'redux';
import communityReducer from './communityReducer';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  communityReducer,
  userReducer,
  loadingReducer,
});
export default rootReducer;
