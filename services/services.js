import api from './api';
import {COMMUNITY_URL, LOGIN_URL, REGISTER_URL} from './constants';

export const registerApi = async data => {
  const url = REGISTER_URL;
  const method = 'POST';
  const res = await api(url, method, false, data);
  return res;
};

export const loginApi = async data => {
  const url = LOGIN_URL;
  const method = 'POST';
  const res = await api(url, method, false, data);
  return res;
};

export const getCommunitiesApi = async () => {
  const url = COMMUNITY_URL;
  const method = 'GET';
  const res = await api(url, method, true);
  return res;
};
