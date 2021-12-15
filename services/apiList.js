import api from './api';

const baseUrl = `http://stateview.morid.ca/api`;

export const loginApi = async data => {
  const url = `${baseUrl}/login`;
  const method = 'POST';
  const res = await api(url, method, false, data);
  return res;
};

export const getCommunitiesApi = async () => {
  const url = `${baseUrl}/community-list`;
  const method = 'GET';
  const res = await api(url, method, true);
  return res;
};
