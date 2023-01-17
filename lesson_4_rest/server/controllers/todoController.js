const TodoService = require("./../services/todoService");

class TodoController {
  static getTodos = async (req, res) => {
    try {
      const todos = await TodoService.getAll();
      res.statusCode = 200;
      res.end(JSON.stringify(todos));
    } catch (e) {
      console.log(e);
    }
  };
  static getOneTodo = async (req, res) => {
    try {
      const id = +req.url.split("/")[2];
      const todo = await TodoService.getOneTodo(id);
      if (!todo) {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Todo not found" }));
      } else {
        res.statusCode = 200;
        res.end(JSON.stringify(todo));
      }
    } catch (e) {
      console.log(e);
    }
  };
  static deleteTodo = async (req, res) => {
    try {
      const id = +req.url.split("/")[2];
      const flag = await TodoService.deleteTodo(id);
    } catch (e) {
      console.log(e);
    }
  };
}

module.exports = TodoController;
