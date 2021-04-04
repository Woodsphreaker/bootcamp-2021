import AppError from '@Errors/AppError'
import { NextFunction, Request, Response } from 'express'

import storage from '~/config/storage'

export default (req: Request, res: Response, next: NextFunction): void => {
  const upload = storage().single('filedata')

  upload(req, res, (err: Error | string): Response | void => {
    if (err) {
      const error = err as Error
      throw new AppError(error.message, 500)
    }

    next(null)
  })
}
