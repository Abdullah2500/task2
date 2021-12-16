import {SET_COMMUNITY_DETAILS} from '../types';

const initialData = {
  list: [],
};
const communityReducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_COMMUNITY_DETAILS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
export default communityReducer;
