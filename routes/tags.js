import { Router } from 'express';
import tagsController from '../controllers/tags';
const router = new Router();

router.get('/:tag_id/items', tagsController.getTagItems);

export default router;