import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';
import '@shared/infra/typeorm';
import '@shared/container';
import app from './config/app';

app.listen(3333, () => {
  console.log(' Server started at localhost:3333');
});
