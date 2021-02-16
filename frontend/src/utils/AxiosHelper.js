import axios from 'axios';
import RouterHandle from 'router';
import CONFIG from 'config/env';

axios.interceptors.request.use(
  (config) => {
    config.headers['Access-Control-Allow-Origin'] = true;
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['access-token'] = token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
