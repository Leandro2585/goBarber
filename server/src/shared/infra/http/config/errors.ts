import AppError from '@shared/errors/AppError';
import { errors } from 'celebrate'
import { Express, Request, Response, NextFunction } from 'express'

export default (app: Express): void => {
  app.use(errors());

  app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }
    console.error(err);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  });
}