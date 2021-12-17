import {SET_USER_DETAILS} from '../types';

const initialData = {
  details: [],
};
const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        details: [...state.details, action.payload],
      };
    default:
      return state;
  }
};
export default userReducer;
