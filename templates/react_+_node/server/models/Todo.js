const mongoose = require('mongoose');

// TODO: Edit this file for creating your own Schema
const todoSchema = mongoose.Schema({
  todoName: { type: String, required: true },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
