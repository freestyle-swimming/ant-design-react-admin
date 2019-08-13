import Axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { BusinessError, CancelError, NetError } from '../errors';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ApiData<T = any> {
  errcode: number;
  data: T;
  errmsg: string;
}

class AxiosWraper {
  public axiosInstance: AxiosInstance;
  public constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public wrapRequest(request: AxiosPromise<ApiData>): Promise<any> {
    return request
      .then((res) => {
        const { data } = res;

        if (data.errcode > 0) {
          return Promise.reject(new BusinessError(data.errcode, data.errmsg));
        }

        return Promise.resolve(data);
      })
      .catch((error) => {
        if (Axios.isCancel(error)) {
          return Promise.reject(new CancelError('Request canceled'));
        }

        const { response } = error;
        if (response) {
          const responseData = response.data || {};
          return Promise.reject(new NetError(response.status, responseData.errmsg));
        }

        return Promise.reject(error);
      });
  }

  public get(url: string, config: AxiosRequestConfig): Promise<ApiData> {
    return this.wrapRequest(this.axiosInstance.get(url, config));
  }
}

export default AxiosWraper;
