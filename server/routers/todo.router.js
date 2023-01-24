const router = require('express').Router()
const { getTodo, postTodo, deleteTodo, updateTodo } = require('../controllers/todo.controller.js')

router.get('/', getTodo)

router.post('/', postTodo)

router.delete('/:id', deleteTodo)

router.put('/:id', updateTodo)

module.exports = router