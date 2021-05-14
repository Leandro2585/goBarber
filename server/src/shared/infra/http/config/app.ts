import express from 'express'
import setupMiddlewares from './middlewares'
import setupStaticFiles from './staticFiles'
import setupRoutes from './routes'
import setupErrors from './errors'

const app = express()

setupMiddlewares(app)
setupStaticFiles(app)
setupRoutes(app)
setupErrors(app)

export default app