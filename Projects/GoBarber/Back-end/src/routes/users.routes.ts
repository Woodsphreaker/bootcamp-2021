import usersController from '@Controllers/userController'
import { routerFactory } from '@Factories'

const router = routerFactory()

router.get('/', usersController.index)

export default router
