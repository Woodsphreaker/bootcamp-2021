import { hash } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'

import AppError from '@Errors/AppError'
import Users from '@Models/Users'
import UserRepository from '@Repositories/UsersRepository'

interface UserDTO {
  name: string
  email: string
  password: string
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
  }: UserDTO): Promise<Users | undefined> {
    const userRepository = getCustomRepository(UserRepository)
    const findUserWithEmail = await userRepository.findOne({ where: { email } })

    if (findUserWithEmail) {
      throw new AppError('User already exists with this email', 400)
    }

    const encryptedPassword = await hash(password, 8)

    const user = await userRepository.add({
      name,
      email,
      password: encryptedPassword,
    })

    return user
  }
}

export default CreateUserService
