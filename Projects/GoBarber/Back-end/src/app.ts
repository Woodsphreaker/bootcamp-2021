import routes from '@Routes'
import { serverFactory } from '@Factories'

import 'reflect-metadata'
import './database'

const { createApp } = serverFactory

const app = createApp()
app.use(routes)

export default app
