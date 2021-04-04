import { NextFunction, Request, Response } from 'express'

import storage from '~/config/storage'

export default (req: Request, res: Response, next: NextFunction): void => {
  const upload = storage().single('filedata')

  upload(req, res, (err: Error | string): Response | void => {
    if (err) {
      const error = err as Error
      return res.status(500).json({ error: error.message })
    }

    next(null)
  })
}
