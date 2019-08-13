import axios from 'axios';
import AxiosWrapper from './axiosWrapper';

export { default as requestErrorHandler } from './requestErrorHandler';

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  timeout: 50000
});

// Add a request interceptor
service.interceptors.request.use((config) => config, (error) => Promise.reject(error));

// Add a response interceptor
service.interceptors.response.use((response) => response, (error) => Promise.reject(error));

export default new AxiosWrapper(service);
