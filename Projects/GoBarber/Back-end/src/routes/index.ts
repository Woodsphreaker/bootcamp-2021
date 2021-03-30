import tokenAuth from '@Middlewares/tokenAuth'

import { routerFactory } from '../factories'
import appointmentsRouter from './appointments.routes'
import sessionsRoutes from './sessions.routes'
import usersRouter from './users.routes'

const router = routerFactory()

router.use('/sessions', sessionsRoutes)

// Authenticated routes
router.use(tokenAuth)

router.use('/appointments', appointmentsRouter)
router.use('/user', usersRouter)

export default router
