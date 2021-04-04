import { getCustomRepository } from 'typeorm'

import Users from '@Models/Users'
import UserRepository from '@Repositories/UsersRepository'
import { deleteFile } from '@Tools/fsTools'

import appPaths from '../config/paths'

interface UserAvatarDTO {
  id: string
  avatarFileName: string
}

class UpdateUserAvatarService {
  public async execute({ id, avatarFileName }: UserAvatarDTO): Promise<Users> {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.findOne({ where: { id } })

    if (!user) {
      throw new Error('user not found')
    }

    await deleteFile(appPaths.uploadFolder, user.avatar)

    user.avatar = avatarFileName
    await userRepository.save(user)

    return user
  }
}

export default UpdateUserAvatarService
