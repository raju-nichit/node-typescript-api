"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../models/todo");
// export const createTodos=(req:Request,res:Response,next:NextFunction)=>{
// }
const TODOS = [];
exports.createTodos = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created todo..', createTodo: newTodo });
};
