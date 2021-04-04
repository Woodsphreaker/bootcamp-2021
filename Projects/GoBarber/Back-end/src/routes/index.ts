import routerFactory from '@Factories/router.factory'

import appointmentsRouter from './appointments.routes'
import sessionsRoutes from './sessions.routes'
import usersRouter from './users.routes'

const router = routerFactory()

router.use('/sessions', sessionsRoutes)
router.use('/appointments', appointmentsRouter)
router.use('/user', usersRouter)

export default router
