import { getCustomRepository } from 'typeorm'

import UserRepository from '@Repositories/UsersRepository'
import CreateUserService from '@Services/CreateUserService'
import UpdateUserAvatarService from '@Services/UpdateUserAvatarService'

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

const store = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, password } = req.body
  const createUserService = new CreateUserService()

  try {
    const user = await createUserService.execute({ name, email, password })
    return res.json(user)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const update = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.user
  const { filename } = req.file

  const updateAvatarService = new UpdateUserAvatarService()

  try {
    const user = await updateAvatarService.execute({
      id,
      avatarFileName: filename,
    })

    return res.json({ user })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export default { index, store, update }
