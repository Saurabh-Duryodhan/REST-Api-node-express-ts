"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
//Get Request
router.get('/', todos_1.getTodos);
//Post Request
router.post('/', todos_1.createTodo);
//Patch Request
router.patch('/:id', todos_1.updateTodo);
//Delete Request
router.delete('/:id', todos_1.deleteTodo);
exports.default = router;
