import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import SessionUserController from './app/controllers/SessionUserController';
import SessionCustomerController from './app/controllers/SessionCustomerController';
import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users/sessions', SessionUserController.store);
routes.post('/customers/sessions', SessionCustomerController.store);

routes.post('/users', UserController.store);

routes.post('/files', upload.single('file'), FileController.store);

routes.use(authMiddleware);

routes.get('/users', UserController.index);

export default routes;
