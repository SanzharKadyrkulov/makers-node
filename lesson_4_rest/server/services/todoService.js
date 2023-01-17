const todos = require("./../models/todosModel");

class TodoService {
  static getAll() {
    try {
      return new Promise((resolve) => {
        resolve(todos);
      });
    } catch (e) {
      console.log(e);
    }
  }
  static getOneTodo(id) {
    try {
      const todo = todos.find((item) => item.id == id);
      return new Promise((resolve) => {
        resolve(todo);
      });
    } catch (e) {
      console.log(e);
    }
  }
  static deleteTodo(id) {}
}

module.exports = TodoService;
