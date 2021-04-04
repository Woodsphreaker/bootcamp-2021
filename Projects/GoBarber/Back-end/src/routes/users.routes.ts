import userController from '@Controllers/userController'
import { routerFactory } from '@Factories'
import tokenAuth from '@Middlewares/tokenAuth'
import upload from '@Middlewares/upload'

const router = routerFactory()

router.post('/', userController.store)

// Authenticated routes
router.use(tokenAuth)

router.get('/', userController.index)

router.patch('/', upload, userController.update)

export default router
