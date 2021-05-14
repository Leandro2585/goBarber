import { Request, Response, NextFunction} from 'express';

export const cors = (request: Request, response: Response, next: NextFunction) => {
  response.set('x-access-allow-origin', '*')
  response.set('x-access-allow-methods', '*')
  response.set('x-access-allow-headers', '*')
  next()
}