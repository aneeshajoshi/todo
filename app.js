const express = require('express');
const app = express();
const port  = 3000 || process.env.PORT;
const mongoose = require('mongoose');
//const keys = require('./config/keys');
const bodyParser = require('body-parser')
const Todo = require('./models/todo')
const todoRoutes = require('./routes/todos')

mongoose.connect('mongodb://localhost:27017/todo-list', {useNewUrlParser: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.use( express.static(__dirname + '/public') )

app.get('/', (req, res)=>{
    res.render('index')
})
app.use('/todos', todoRoutes)

app.listen(port ,()=>{
    console.log('Server has been started!')
})