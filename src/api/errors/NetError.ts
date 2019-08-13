/**
 * 网络异常
 */
class NetError extends Error {
  public code: number;

  public constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }

  public defaultHandler = () => {
    let content = '';
    switch (this.code) {
      case 400:
        content = '请求参数错误！';
        break;
      case 500:
        content = '服务器内部错误！';
        break;
      default:
        content = this.message;
    }

    // Message.error(content);
    window.console.error(content);
  };
}

export default NetError;
