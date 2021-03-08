import routes from './routes'
import { serverFactory } from './factories'

import 'reflect-metadata'
import './database'

const { createApp } = serverFactory

const app = createApp()
app.use(routes)

export default app
