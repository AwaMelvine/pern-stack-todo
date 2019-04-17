import { Router } from 'express';
import items from './items';
import users from './users';
import tags from './tags';

const router = new Router();

router.use('/api/items', items);
router.use('/api/users', users);
router.use('/api/tags', tags);

export default router;

