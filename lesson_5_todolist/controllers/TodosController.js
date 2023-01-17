const TodosModel = require('./../models/todosModel.js')
const { getBodyData } = require('./../utils/helpers.js')

class TodosController{
    static getTodos = async (req, res) => {
        try{
            const todos = await TodosModel.findAll()
            if(!todos){
                res.writeHead(204, {'Content-Type': 'application/json'})
                res.end(JSON.stringify({message: 'Could not find any todos'}))
            }else{
                res.writeHead(200, {'Content-type': 'application/json'})
                res.end(JSON.stringify(todos))
            }
        }catch(e){
            console.log(e);
        }
    }
    static getTodo = async (req, res, id) => {
        try {
            const todo = await TodosModel.findOne(id)            

            if(!todo){
                res.writeHead(404, {'Content-Type': 'application/json'})
                res.end(JSON.stringify({message: 'Todo not found'}))
            }else{
                res.writeHead(200, {'Content-type': 'application/json'})
                res.end(JSON.stringify(todo))
            }
        } catch (e) {
            console.log(e);
        }
    }
    static createTodo = async (req, res) => {
        try {
            const body = await getBodyData(req)
            const { todo, done } = JSON.parse(body)
            const todoItem = {
                todo,
                done
            }

            const newTodo = await TodosModel.create(todoItem)

            res.writeHead(200, {'Content-type': 'application/json'})
            res.end(JSON.stringify({message: 'Todo successfully created', data: newTodo}))
        } catch (e) {
            console.log(e);
            res.writeHead(500, {'Content-type': 'application/json'})
            res.end(JSON.stringify({message: 'Some internal error occurred'}))
        }
        
    }
}

module.exports = TodosController;