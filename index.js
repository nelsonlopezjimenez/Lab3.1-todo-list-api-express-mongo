const express = require('express')
const app = express()
const mongoose = require('mongoose');

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded( { extended: true}));
app.use(express.static('/public'));
app.set('view engine', 'ejs');

// Database Server MongoDb Setup

mongoose.connect('mongodb://localhost/colt-wieruch-todo-list',
        { useNewUrlParser:true } );

const todoSchema = new mongoose.Schema({
    title: String,
    isChecked : {type:Boolean, default: false },
    date: { type: Date, default: new Date() }
});

const todoModel = mongoose.model("Todo", todoSchema);

// Custom Middleware

// Routes

app.get('/api/todos', function (req, res){
    todoModel.find()
    .then (function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
})



app.get('/api/todos/:id', function (req, res){
    todoModel.findById( req.params.id)
    .then (function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
})
app.post('/api/todos', function( req, res) {
    todoModel.create({
        title : req.body.title,
    })
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err) {
        res.send(err);
    });
});

app.delete('/api/todos/:id', function (req, res){
    todoModel.deleteOne( { _id: req.params.id }, )
    .then (function() {
        res.json( { 'We deleted it!!': "we deleted it"});
    })
    .catch(function(err){
        res.send(err);
    });
});

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/cat', function (req, res) {
    res.send("WOOF, WOOF!!")
})

app.get('/:animal', function (req, res) {
    let buildString = "";
    if (req.params.animal == "dog") {
        buildString += "MEOW "
        res.send(buildString);
    } else {
        res.send("The animal is not in our zoo!!")
    }
})
app.get('/:animal/:numberOfTimes', function (req, res) {
    let buildString = "";
    let animal  = req.params.animal;
    let numberOfTimes = req.params.numberOfTimes
    if (animal == "dog") {
        for (i = 0; i < numberOfTimes ; i++) {
            buildString += "MEOW "
        }
        res.send(buildString);
    } else {
        res.send(`The ${animal} is not in our zoo`)
    }
})

app.listen(4444)

// Database Seeding

const createTodos = async () => {
    const todo1 = new mongoose.models.Todo ({
        title: 'Feed the cat with the fish',
    });
    const todo2 = new model.Todo ({
        title: 'Walk the fish',
    });
    await todo1.save();
    await todo2.save();
};