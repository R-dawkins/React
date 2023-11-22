import express from 'express';
import * as orderController from '../controller/orderController.js'

const router = express.Router();
router.post('/new', orderController.postOrder);
export default router;