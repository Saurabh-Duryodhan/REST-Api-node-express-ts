import { Router } from "express";
import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todos';
const router = Router();

//Get Request
router.get('/', getTodos);

//Post Request
router.post('/', createTodo);

//Patch Request
router.patch('/:id', updateTodo);

//Delete Request
router.delete('/:id', deleteTodo)


export default router;