const router = require('express').Router()
const { getTodo, postTodo, deleteTodo } = require('../controllers/todo.controller.js')

router.get('/', getTodo)

router.post('/', postTodo)

router.delete('/:id', deleteTodo)

module.exports = router