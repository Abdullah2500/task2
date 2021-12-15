import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default async (url, method, token, body) => {
  let headers = {};
  if (token) {
    const userToken = await AsyncStorage.getItem('token');
    headers.Authorization = `Bearer ${userToken}`;
  }

  const structure = {
    url,
    method,
    headers,
  };

  if (method === 'GET') {
    structure.params = body;
  } else {
    structure.data = body;
  }
  return axios(structure)
    .then(resp => {
      return resp.data;
    })
    .catch(err => {
      return err.response.data;
    });
};
