import { Router } from 'express';

import SessionUserController from './app/controllers/SessionUserController';
import SessionCustomerController from './app/controllers/SessionCustomerController';

const routes = new Router();

routes.post('/user/session', SessionUserController.store);
routes.post('/customer/session', SessionCustomerController.store);

export default routes;
