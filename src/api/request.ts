import axios from 'axios';

import { API_BASE_URL } from './urls';

export const request = axios.create();

request.interceptors.request.use((config) => {
  config.baseURL = API_BASE_URL;
  return config;
});

export default request;
