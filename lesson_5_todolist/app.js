require('dotenv').config()
const http = require('http')
const TodosController = require('./controllers/TodosController.js')
const {PATH_REGEX} = require('./utils/const.js')

const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    if(req.url === '/api/v1/todos' && req.method === 'GET'){
        TodosController.getTodos(req, res)
    }else if(req.url.match(PATH_REGEX) && req.method === 'GET'){
        const id = +(req.url.split('/')[4])
        TodosController.getTodo(req, res, id)
    }else if(req.url=== '/api/v1/todos' && req.method === 'POST'){
        TodosController.createTodo(req, res)
    }
})

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})