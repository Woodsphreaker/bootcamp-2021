import { server } from './server.factory'

function routerFactory(): server.Router {
  const { Router } = server
  return Router()
}

export default routerFactory
