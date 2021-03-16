import usersController from '@Controllers/userController'
import { routerFactory } from '@Factories'

const router = routerFactory()

router.get('/', usersController.index)
router.post('/', usersController.store)

export default router
