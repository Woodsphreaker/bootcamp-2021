import { NextFunction, Request, Response } from '@Factories/server.factory'

import AppError from './AppError'

export default function globalErrorHandling(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Response {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message })
  }

  return response
    .status(500)
    .json({ status: 'error', message: 'internal server error' })
}
