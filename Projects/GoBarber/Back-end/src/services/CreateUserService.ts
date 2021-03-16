import { getCustomRepository } from 'typeorm'

import Users from '@Models/Users'
import UserRepository from '@Repositories/UsersRepository'

interface UserDTO {
  name: string
  email: string
  password: string
}

class CreateUserService {
  public async execute({ name, email, password }: UserDTO): Promise<Users> {
    const userRepository = getCustomRepository(UserRepository)
    const findUserWithEmail = await userRepository.findOne({ where: { email } })

    if (findUserWithEmail) {
      throw new Error('User already exists with this email')
    }

    const user = await userRepository.add({ name, email, password })
    return user
  }
}

export default CreateUserService
