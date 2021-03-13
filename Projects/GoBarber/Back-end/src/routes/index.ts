import { routerFactory } from '../factories'
import usersRouter from '../routes/users.routes'
import appointmentsRouter from './appointments.routes'

const router = routerFactory()

router.use('/appointments', appointmentsRouter)
router.use('/user', usersRouter)

export default router
