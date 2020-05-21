import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.server.use(cors());
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
