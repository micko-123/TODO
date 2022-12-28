const express = require('express')
require('dotenv').config()
const todoRouter = require('./routers/todo.router')
const connectDB = require('./config/db')

const app = express()


// connect to database
connectDB() 

app.use(express.json())


app.use('/todo', todoRouter)


const port = process.env.PORT || 5000
app.listen(port, () =>{
    console.log('Server listening')
})