import request from './utils';
import { ApiData } from './utils/axiosWrapper';

interface GetUserInfoParams {
  userId: number;
}
export const requestGetUserInfo = (params: GetUserInfoParams): Promise<ApiData> => {
  return request.get('/api/userInfo', { params });
};
