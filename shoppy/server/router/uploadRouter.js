import express from 'express';
import * as uploadController from '../controller/uploadContorller.js'
const router = express.Router();

router.post('/', uploadController.upload);


export default router;