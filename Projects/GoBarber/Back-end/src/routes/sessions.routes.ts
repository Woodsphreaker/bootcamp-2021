import sessionsController from '@Controllers/sessionsController'
import { routerFactory } from '@Factories'

const router = routerFactory()

router.post('/', sessionsController.store)

export default router
