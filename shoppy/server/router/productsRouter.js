import express from 'express';
import * as productsController from '../controller/productsController.js';
const router = express.Router();
router.get('/', productsController.getProducts);
router.get('/:pid', productsController.getProductsDetail);
router.post('/regist',productsController.postProducts);


export default router;