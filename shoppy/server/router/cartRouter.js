import express from 'express';
import * as cartController from '../controller/cartController.js'

const router = express.Router();
router.post('/new', cartController.addCart);
router.get('/:id/:start/:size', cartController.getPageList);
// router.get('/:id/:start/:end', cartController.getPageList);
// router.get('/:id', cartController.getCart);
//원래 코드는 남겨두고 지우지는 않기
router.delete('/remove/:cid', cartController.removeCartItem);
router.put('/update/:cid/:qty', cartController.updateCart);
router.delete('/removelist/:id', cartController.removeCart);
export default router;