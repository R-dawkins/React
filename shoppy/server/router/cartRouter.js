import express from 'express';
import * as cartController from '../controller/cartController.js'

const router = express.Router();
router.post('/new', cartController.addCart);
router.get('/:id', cartController.getCart);
router.delete('/remove/:cid', cartController.removeCart);
router.put('/update/:cid/:qty', cartController.updateCart);
export default router;