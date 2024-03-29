const Todo = require('../models/Todo.model')


const getTodo = async (req, res) =>{
    const todos = await Todo.find()

    res.status(200).json({
        todos
    })
}


const postTodo = async (req, res) => {
    const todo = await Todo.create({
        item: req.body.item
    })

    res.status(201).json(todo)
}


const deleteTodo = async(req, res) =>{
    const todos = await Todo.findByIdAndDelete(req.params.id)

    res.status(200).json({
        status:'success',
        message: 'nice job'
    })
}

const updateTodo = async( req, res)=>{
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(201).json({
        status:'success',
        data: todo
    })
}

module.exports = {
    getTodo,
    postTodo,
    deleteTodo,
    updateTodo
}