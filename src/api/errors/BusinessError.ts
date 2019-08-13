/**
 * 业务异常
 */
class BusinessError extends Error {
  public code: number;

  public constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }

  public defaultHandler = () => {
    // Message.error(this.message);
    window.console.error(this.message);
  };
}

export default BusinessError;
