import { Router } from 'express';
import itemsController from '../controllers/items';
const router = new Router();

router.get('/', itemsController.getAllItems);
router.get('/:id', itemsController.getById);
router.get('/:id/toggle', itemsController.toggleCompleted);
router.post('/', itemsController.createItem);
router.delete('/:id', itemsController.deleteItem);
router.patch('/:id', itemsController.updateItem);

export default router;