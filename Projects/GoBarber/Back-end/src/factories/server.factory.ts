import express, { Request, Response, NextFunction } from 'express'

function createApp(): express.Express {
  const app = express()
  app.use(express.json())
  return app
}

export { createApp, express as server, Response, Request, NextFunction }
