import express from 'express';
import * as nativeController from '../controller/nativeController.js'
const router = express.Router();
router.get('/',nativeController.getData)
router.post('/insert',nativeController.postTodo)
router.put('/:isCompleted/:tid',nativeController.checkTodo)
router.put('/edit/:isEditing/:tid',nativeController.editTodo)
router.put('/edit/:isEditing/:tid/:content',nativeController.editContentTodo)
router.delete('/:tid',nativeController.removeTodo)
export default router;