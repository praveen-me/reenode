const express = require('express');
const todoController = require('./../controllers/todo.controller');

const router = express.Router();

// TODO:
// Feel free to edit this file

router.get('/todos', todoController.getAllTodos);

module.exports = router;
