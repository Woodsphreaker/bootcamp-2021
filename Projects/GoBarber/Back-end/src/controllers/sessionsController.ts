import { Request, Response } from '@Factories/server.factory'
import CreateSessionService from '@Services/CreateSessionService'

const store = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body

  const createSession = new CreateSessionService()
  const { token } = await createSession.execute({ email, password })
  return res.json({ token })
}

export default { store }
