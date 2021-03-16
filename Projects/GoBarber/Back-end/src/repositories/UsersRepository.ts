import { EntityRepository, Repository } from 'typeorm'

import User from '@Models/Users'

interface UserDTO {
  name: string
  email: string
  password: string
}

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async listAll(): Promise<User[]> {
    const users = await this.find()
    return users
  }

  public async add({ name, email, password }: UserDTO): Promise<User> {
    const user = this.create({ name, email, password })
    await this.save(user)
    return user
  }
}

export default UserRepository
