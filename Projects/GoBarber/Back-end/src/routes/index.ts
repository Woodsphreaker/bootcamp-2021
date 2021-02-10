import { routerFactory } from '../factories'
import appointmentsRouter from './appointments.router'

const router = routerFactory()

router.use('/appointments', appointmentsRouter)

export default router
