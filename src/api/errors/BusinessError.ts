/**
 * 业务异常
 */
import { message as Message } from 'antd';
class BusinessError extends Error {
  public code: number;

  public constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }

  public defaultHandler = () => {
    Message.error(this.message);
  };
}

export default BusinessError;
