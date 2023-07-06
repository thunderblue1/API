import { Request, Response, Router} from 'express';
import * as UsersController from './users.controller';

const router = Router();

router
    .route('/users/:userId')
    .get(UsersController.readOneUser);

router
    .route('/users/search/:searchTerm')
    .get(UsersController.searchForUser);

router
    .route('/users')
    .post(UsersController.createUser);

router
    .route('/users')
    .put(UsersController.updateUser);

router
    .route('/users/:userId')
    .delete(UsersController.deleteUser);

export default router;