"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = require("../controller/todo.controller");
const router = express_1.Router();
router.post('/', todo_controller_1.createTodos);
router.get('/', todo_controller_1.getTodos);
router.patch('/:id');
router.delete('/:id');
exports.default = router;
