import { getCustomRepository } from 'typeorm'

import UserRepository from '@Repositories/UsersRepository'

import { Request, Response } from '~/factories/server.factory'

const index = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userRepository = getCustomRepository(UserRepository)
    const users = await userRepository.listAll()
    return res.json(users)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export default { index }
