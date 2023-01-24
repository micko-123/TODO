const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    item: {
        type:String,
    },
    date: {
        type: Date,
        default: new Date(),
    },
    status: {
        type: String,
        default: 'pending'
    }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo