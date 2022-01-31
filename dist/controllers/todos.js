"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../model/todo");
const uniqid_1 = __importDefault(require("uniqid"));
const Todo = [];
const createTodo = (req, res, next) => {
    console.log(res, next);
    const text = req.body.text;
    const title = req.body.title;
    const time = new Date();
    const newTodo = new todo_1.TodoModel((0, uniqid_1.default)('taskID'), text, title, time.toString());
    Todo.push(newTodo);
    res.status(201).json({ message: "Todo Created", Todo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    console.log(req, next);
    res.json({ mesage: 'Fetching todos', Todo });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    console.log(req, next);
    const taskID = req.params.id;
    const updatedText = req.body.text;
    const updatedTitle = req.body.title;
    const findTodoID = Todo.findIndex(todo_id => todo_id.id === taskID);
    const updatedTime = new Date().toString();
    if (findTodoID < 0) {
        throw new Error(`Couldn't find todo with this ${taskID}`);
    }
    Todo[findTodoID] = new todo_1.TodoModel(Todo[findTodoID].id, updatedText, updatedTitle, updatedTime);
    res.json({ updatedTask: Todo[findTodoID] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    console.log(req, next);
    const todoId = req.params.id;
    const taskIndex = Todo.findIndex(todo => todo.id === todoId);
    if (taskIndex < 0) {
        throw new Error(`Couldn't find task with this ${taskIndex}`);
    }
    Todo.splice(taskIndex, 1);
    res.json({ delete: `delete successfully...!` });
};
exports.deleteTodo = deleteTodo;
