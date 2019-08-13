/**
 * 请求中断异常
 */
class CancelError extends Error {
  public constructor(message: string) {
    super(message);
  }

  public defaultHandler = () => {
    window.console.error(this.message);
  };
}

export default CancelError;
