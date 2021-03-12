import { EntityRepository, Repository } from 'typeorm'
import User from '../models/Users'

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async listAll(): Promise<User[]> {
    const users = await this.find()
    return users
  }
}

export default UserRepository
