import helmet from 'helmet'

import { serverFactory } from '@Factories'
import routes from '@Routes'

import appPaths from './config/paths'

import 'reflect-metadata'
import './database'

const { createApp, server } = serverFactory

const app = createApp()
app.use(helmet())
app.use(routes)
app.use('/files', server.static(appPaths.uploadFolder)) // static files on route /files

export default app
