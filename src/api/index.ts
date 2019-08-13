import request from './utils';
import { ApiData } from './utils/axiosWrapper';

interface GetUserInfoParams {
  userId: number;
}
interface GetUserInfoReturnData {
  userName: string;
  address: string;
  phoneNumber: number;
}
export const requestGetUserInfo = (
  params: GetUserInfoParams
): Promise<ApiData<GetUserInfoReturnData>> => {
  return request.get('/jq/user/enterprise/getAccount', { params });
};
