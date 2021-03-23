import CreateSessionService from '@Services/CreateSessionService'

import { Request, Response } from '~/factories/server.factory'

const store = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body

  try {
    const createSession = new CreateSessionService()
    const {
      user: { id, name },
    } = await createSession.execute({ email, password })
    return res.json({ id, name })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

export default { store }
