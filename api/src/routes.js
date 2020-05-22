import { Router } from 'express';

import SessionUserController from './app/controllers/SessionUserController';

const routes = new Router();

routes.post('/user/session', SessionUserController.store);

export default routes;
