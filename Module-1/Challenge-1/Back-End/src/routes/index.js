import { Router } from 'express'

import userController from '../app/controllers/userController'

const router = Router()

router.get('/user', userController.index)
router.post('/user', userController.create)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.destroy)

export default router
