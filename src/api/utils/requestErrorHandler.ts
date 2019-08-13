import { BusinessError, NetError, CancelError } from '../errors';
type CustomError = BusinessError | NetError | CancelError;

export default function errorHandler(error: Error): void {
  const isCustomError =
    error instanceof BusinessError || error instanceof CancelError || error instanceof NetError;

  if (!isCustomError) {
    throw error;
  }

  (error as CustomError).defaultHandler();
}
