import helmet from 'helmet'

import { serverFactory } from '@Factories'
import routes from '@Routes'

import 'reflect-metadata'
import './database'

const { createApp } = serverFactory

const app = createApp()
app.use(helmet())
app.use(routes)

export default app
