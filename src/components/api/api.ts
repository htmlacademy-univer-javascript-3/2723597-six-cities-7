import axios from 'axios';
import { IAuthData } from '../types/auth';

const BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
const AUTH_TOKEN_KEY = 'six-cities-token';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  if (token && config.headers) {
    config.headers['X-Token'] = token;
  }

  return config;
});

export const authApi = {
  getAuthStatus: () =>
    api.get<IAuthData>('/login').then((response) => response.data),
};

export default api;
