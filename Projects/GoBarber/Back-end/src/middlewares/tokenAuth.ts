import jwt from 'jsonwebtoken'

import AppError from '@Errors/AppError'

import authConfig from '../config/auth'
import { Request, Response, NextFunction } from '~/factories/server.factory'

interface TokenResponse {
  id: string
  iat: number
  exp: number
  sub: string
}

export default (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const { authorization } = req.headers

  if (!authorization) {
    throw new AppError('not authorized', 401)

    // return res.status(401).json({ error: 'not authorized' })
  }

  const [bearer, token] = authorization.split(' ')

  if (!bearer) {
    throw new AppError('not standard authorization header', 401)
    // return res.status(401).json({ error: 'not standard authorization header' })
  }

  if (!token) {
    throw new AppError('missing token', 401)
    // return res.status(401).json({ error: 'missing token' })
  }

  jwt.verify(token, authConfig.secret, (error, decode) => {
    if (error) {
      throw new AppError('invalid token', 401)
      // return res.status(401).json({ error: 'invalid token' })
    }

    const { id } = decode as TokenResponse

    req.user = {
      id,
    }

    // console.log(decode)

    next()
  })
}
