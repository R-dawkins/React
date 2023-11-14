import express from 'express';
import * as productsController from '../controller/productsController.js';
const router = express.Router();
router.get('/products', productsController.getProducts);
router.get('/products/:id', productsController.getProductsDetail);
router.post('/products/regist',productsController.postProducts);



export default router;