import appointmentsController from '@Controllers/appointmentsController'
import { routerFactory } from '@Factories'
import tokenAuth from '@Middlewares/tokenAuth'

const router = routerFactory()

// Authenticated routes
router.use(tokenAuth)

router.get('/', appointmentsController.index)
router.post('/', appointmentsController.store)

export default router
