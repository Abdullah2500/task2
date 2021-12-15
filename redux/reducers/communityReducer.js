import * as types from '../types';

const initialData = {
  list: [],
};
const communityReducer = (state = initialData, action) => {
  switch (action.type) {
    case types.SET_COMMUNITY_DETAILS:
      return {
        list: action.payload,
      };
  }
};
export default communityReducer;
