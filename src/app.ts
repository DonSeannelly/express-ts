import { ExpressDriver } from '@oriented/express';
import API from './routes/api';

const app = ExpressDriver.start();

app.use('/', API.setupRouter());