import { Router } from 'express';
import usersController from '../controllers/users';
const router = new Router();

router.get('/:id/items', usersController.getAllUserItems);

export default router;