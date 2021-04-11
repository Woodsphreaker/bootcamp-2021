import { EntityRepository, Repository } from 'typeorm'

import User from '@Models/Users'

interface UserDTO {
  id?: string
  name: string
  email: string
  password: string
  avatar?: string
}

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async listAll(): Promise<User[]> {
    const users = await this.find()
    return users
  }

  public async add({
    name,
    email,
    password,
  }: UserDTO): Promise<User | undefined> {
    await this.save(this.create({ name, email, password }))
    const newUser = await this.findOne({ where: { email } })
    return newUser
  }
}

export default UserRepository
