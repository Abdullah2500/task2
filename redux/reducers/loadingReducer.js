import {CLOSE_LOADING, START_LOADING} from '../types';

const initialState = false;
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case CLOSE_LOADING:
      return false;
    default:
      return state;
  }
};
export default loadingReducer;
