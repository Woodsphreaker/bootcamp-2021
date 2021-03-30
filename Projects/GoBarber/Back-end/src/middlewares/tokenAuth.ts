import jwt from 'jsonwebtoken'

import authConfig from '../config/auth'
import { Request, Response, NextFunction } from '~/factories/server.factory'

export default (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'not authorized' })
  }

  const [bearer, token] = authorization.split(' ')

  if (!bearer) {
    return res.status(401).json({ error: 'not standard authorization header' })
  }

  if (!token) {
    return res.status(401).json({ error: 'missing token' })
  }

  jwt.verify(token, authConfig.secret, (error, decode) => {
    if (error) {
      return res.status(401).json({ error: 'invalid token' })
    }

    console.log(decode)

    next()
  })
}