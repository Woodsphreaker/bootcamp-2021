import {Request, Response} from 'express'
import createUser from './services/CreateUserService'

export function helloTD (req: Request, res: Response) {  
  const user = createUser(
    {
      name: 'woods', 
      email: 'teste@teste.com', 
      password: '123',
      techs: ['node', 'react', {
        title: 'JS', experience: 100
      }]
    }
  )
  console.log()
  return res.json({message: user})
}