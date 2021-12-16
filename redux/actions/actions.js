import {
  CLOSE_LOADING,
  SET_COMMUNITY_DETAILS,
  SET_USER_DETAILS,
  START_LOADING,
} from '../types';
export const setCommunityDetails = data => {
  return {
    type: SET_COMMUNITY_DETAILS,
    payload: data,
  };
};

export const setUserDetails = data => {
  return {
    type: SET_USER_DETAILS,
    payload: data,
  };
};

export const startLoading = () => {
  return {
    type: START_LOADING,
  };
};
export const closeLoading = () => {
  return {
    type: CLOSE_LOADING,
  };
};
