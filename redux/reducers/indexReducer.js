import {combineReducers} from 'redux';
import communityReducer from './communityReducer';

const rootReducer = combineReducers({
  communityReducer,
});
export default rootReducer;
