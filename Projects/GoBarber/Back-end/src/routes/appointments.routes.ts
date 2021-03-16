import appointmentsController from '@Controllers/appointmentsController'
import { routerFactory } from '@Factories'

const router = routerFactory()

router.get('/', appointmentsController.index)
router.post('/', appointmentsController.store)

export default router
