import routes from './routes'
import { serverFactory } from './factories'

const { createApp } = serverFactory

const app = createApp()
app.use(routes)

export default app
