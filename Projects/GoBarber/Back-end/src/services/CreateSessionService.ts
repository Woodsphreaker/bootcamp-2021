import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'

import AppError from '@Errors/AppError'
import UserRepository from '@Repositories/UsersRepository'

import authConfig from '../config/auth'

interface UserDTO {
  email: string
  password: string
}

interface Response {
  token: string
}

class CreateSessionService {
  public async execute({ email, password }: UserDTO): Promise<Response> {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository
      .createQueryBuilder('user') // user is a query alias
      .addSelect('user.password') // add hide field in return (see user model)
      .where('user.email = :email', { email })
      .getOne()

    if (!user) {
      throw new AppError('User not found or password is incorrect', 401)
    }

    const matchWithEncryptedPassword = await compare(password, user.password)

    if (!matchWithEncryptedPassword) {
      throw new AppError('Password not match', 401) // only example message - write better message to return
    }

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      subject: user.id,
      expiresIn: authConfig.expiresIn,
    })

    return {
      token,
    }
  }
}

export default CreateSessionService
