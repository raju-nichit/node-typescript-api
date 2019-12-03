"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = require("../models/todo.model");
// export const createTodos=(req:Request,res:Response,next:NextFunction)=>{
// }
const TODOS = [];
exports.createTodos = (req, res, next) => {
    const text = req.body.text;
    console.log(req.body);
    const newTodo = new todo_model_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created todo..', createTodo: newTodo });
};
exports.getTodos = (req, res, next) => {
    res.status(200).json({ todos: TODOS });
};
