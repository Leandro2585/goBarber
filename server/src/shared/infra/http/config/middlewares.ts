import { Express } from 'express'
import { cors, bodyParser, contentType, rateLimiter } from '../middlewares'

export default (app: Express): void => {
  app.use(cors);
  app.use(bodyParser);
  app.use(contentType);
  app.use(rateLimiter);
}