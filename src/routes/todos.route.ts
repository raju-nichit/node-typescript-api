import {Router,NextFunction,Request,Response} from 'express';
   
import {createTodos,getTodos} from '../controller/todo.controller';
const router= Router();

router.post('/',createTodos);
router.get('/',getTodos);
router.patch('/:id');
router.delete('/:id');

export default router;

