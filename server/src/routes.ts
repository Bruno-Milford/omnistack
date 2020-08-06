import exprees from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = exprees.Router();
const classesController = new ClassesController();
const connnectionsController = new ConnectionController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connnectionsController.index);
routes.post('/connections', connnectionsController.create);

export default routes;
