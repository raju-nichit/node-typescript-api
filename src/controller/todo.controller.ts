// import {Request,Response,NextFunction} from 'express';
import {RequestHandler} from 'express';
import {Todo} from '../models/todo.model';
// export const createTodos=(req:Request,res:Response,next:NextFunction)=>{

// }


const TODOS:Todo[]=[];
export const createTodos:RequestHandler=(req,res,next) =>{
    const text= (req.body as {text:string}).text;

    console.log(req.body);
    const newTodo= new Todo(Math.random().toString(),text);
    TODOS.push(newTodo);

    res.status(201).json({message:'Created todo..',createTodo:newTodo})
}

export const getTodos:RequestHandler=(req,res,next) =>{
    res.status(200).json({todos:TODOS});
}

