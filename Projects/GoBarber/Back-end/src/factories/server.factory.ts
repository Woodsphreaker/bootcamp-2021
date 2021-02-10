import express from 'express'

function createApp(): express.Express {
  const app = express()
  app.use(express.json())
  return app
}

export { createApp, express as server }
