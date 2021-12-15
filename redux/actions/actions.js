import * as types from '../types';

export const setCommunityDetails = data => {
  return {
    type: types.SET_COMMUNITY_DETAILS,
    payload: data,
  };
};
