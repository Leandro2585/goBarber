import express, { Express } from 'express'
import uploadConfig from '@config/upload';

export default (app: Express): void => {
  app.use('/files', express.static(uploadConfig.uploadsFolder));
} 
