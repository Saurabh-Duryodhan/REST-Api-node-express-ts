import { RequestHandler } from "express";
import { TodoModel } from "../model/todo";
import uniqid from 'uniqid';

const Todo: TodoModel[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    console.log(res, next)
    const text = (req.body as { text: string }).text;
    const title = (req.body as { title: string }).title;
    const time: Date = new Date();
    const newTodo = new TodoModel(uniqid('taskID'), text, title, time.toString());
    Todo.push(newTodo);
    res.status(201).json({ message: "Todo Created", Todo });
}

export const getTodos: RequestHandler = (req, res, next) => {
    console.log(req, next)
    res.json({mesage: 'Fetching todos', Todo})
}

export const updateTodo: RequestHandler = (req, res, next) => {
    console.log(req, next)
    const taskID = req.params.id;
    const updatedText = (req.body as { text: string }).text;
    const updatedTitle = (req.body as { title: string }).title;
    const findTodoID = Todo.findIndex(todo_id => todo_id.id === taskID);
    const updatedTime: string = new Date().toString();
    if (findTodoID < 0) {
        throw new Error(`Couldn't find todo with this ${taskID}`);
    }
    Todo[findTodoID] = new TodoModel(Todo[findTodoID].id, updatedText, updatedTitle, updatedTime);
    res.json({ updatedTask: Todo[findTodoID] });
}

export const deleteTodo: RequestHandler = (req, res, next) => {
    console.log(req, next);
    const todoId = req.params.id;
    const taskIndex = Todo.findIndex(todo => todo.id === todoId);
    if (taskIndex < 0) {
        throw new Error(`Couldn't find task with this ${taskIndex}`);
    }
    Todo.splice(taskIndex, 1);
    res.json({ delete: `delete successfully...!`})
}