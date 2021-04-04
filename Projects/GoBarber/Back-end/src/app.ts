import helmet from 'helmet'

import globalErrorHandling from '@Errors/globalErrorHandling'
import { createApp, server } from '@Factories/server.factory'
import 'express-async-errors'
import routes from '@Routes'

import appPaths from './config/paths'

import 'reflect-metadata'
import './database'

const app = createApp()

app.use(helmet())
app.use(routes)
app.use('/files', server.static(appPaths.uploadFolder)) // static files on route /files

app.use(globalErrorHandling)

export default app
