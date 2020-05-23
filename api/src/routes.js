import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import SessionProviderController from './app/controllers/SessionProviderController';
import SessionCustomerController from './app/controllers/SessionCustomerController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import CustomerController from './app/controllers/CustomerController';
import ProductController from './app/controllers/ProductController';
import ProductsByCategoryController from './app/controllers/ProductByCategoryController';
import CategoryController from './app/controllers/CategoryController';
import CategoryByProviderController from './app/controllers/CategoryByProviderController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/providers/sessions', SessionProviderController.store);
routes.post('/customers/sessions', SessionCustomerController.store);

routes.post('/providers', ProviderController.store);
routes.post('/customers', CustomerController.store);

routes.post('/files', upload.single('file'), FileController.store);

routes.use(authMiddleware);

routes.post('/categories', CategoryController.store);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.destroy);
routes.get('/categories/:provider_id', CategoryByProviderController.index);

routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);
routes.get('/products/:category_id', ProductsByCategoryController.index);

routes.get('/providers', ProviderController.index);

export default routes;
