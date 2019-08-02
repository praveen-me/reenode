const Todo = require('./../models/Todo');

// TODO:
// Feel free to edit this file
module.exports = {
  async getAllTodos(req, res) {
    const todos = await Todo.find();
    console.log(todos, 'todos');

    return res.json({
      todos,
    });
  },
};
