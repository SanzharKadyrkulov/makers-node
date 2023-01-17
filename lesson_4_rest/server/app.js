require("dotenv").config();
const http = require("http");
const TodoController = require("./controllers/todoController");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.url === "/todos" && req.method === "GET") {
    TodoController.getTodos(req, res);
  } else if (req.url.match(/\/todos\/\w+/) && req.method === "GET") {
    TodoController.getOneTodo(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
