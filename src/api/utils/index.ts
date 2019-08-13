import axios from 'axios';
import AxiosWrapper from './axiosWrapper';

import requestErrorHandler from './requestErrorHandler';
export { default as requestErrorHandler } from './requestErrorHandler';

window.addEventListener('unhandledrejection', (evt: PromiseRejectionEvent) => {
  evt.promise.catch((err) => {
    requestErrorHandler(err);
  });
});

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  timeout: 50000
});

// Add a request interceptor
service.interceptors.request.use((config) => config, (error) => Promise.reject(error));

// Add a response interceptor
service.interceptors.response.use(
  (response) => {
    window.console.log(response);
    const { data } = response;
    Object.assign(response, {
      data: {
        errmsg: data.error_desc,
        errcode: data.error_no
      }
    });
    return response;
  },
  (error) => Promise.reject(error)
);

export default new AxiosWrapper(service);
