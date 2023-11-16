import * as memberController from '../controller/memberController.js'
import express from 'express';
const router = express.Router();
router.post('/signup',memberController.signUp);
router.post('/login',memberController.login);


export default router;