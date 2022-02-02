const express = require('express')
const app = express()
const mongoose = require('mongoose');


// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set('view engine', 'ejs');

// Database Server MongoDb Setup

mongoose.connect('mongodb://localhost/PaulTMaack', { useNewUrlParser: true });


const todoSchema = new mongoose.Schema({
    title: String,
    isChecked: { type: Boolean, default: false },
    date: { type: Date, default: new Date() }
});

const todoModel = mongoose.model("Todo", todoSchema);

// Custom Middleware

// Routes

app.get('/api/todos', function(req, res) {
    todoModel.find()
        .then(function(todos) {
            res.json(todos);
        })
        .catch(function(err) {
            res.send(err);
        })
})


app.get('/api/todos/:id', function(req, res) {
    todoModel.findById(req.params.id)
        .then(function(todos) {
            res.json(todos);
        })
        .catch(function(err) {
            res.send(err);
        })
})
app.post('/api/todos', function(req, res) {
    todoModel.create({
            title: req.body.title,
        })
        .then(function(newTodo) {
            res.status(201).json(newTodo);
        })
        .catch(function(err) {
            res.send(err);
        });
});

app.put('/api/todos/:id', function(req, res) {
    todoModel.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
        .then(function(todos) {
            res.json(todos);
        })
        .catch(function(err) {
            res.send(err);
        })
});

app.delete('/api/todos/:id', function(req, res) {
    todoModel.deleteOne({ _id: req.params.id }, )
        .then(function() {
            res.json({ 'We deleted it!!': "we deleted it" });
        })
        .catch(function(err) {
            res.send(err);
        });
});

app.get('/', function(req, res) {
    res.send('Hello World')
})

// Set up 3 filters. 1) Divisible by 3, and not 5.
// 2) Divisible by 5 and not 3.
// 3) Divisible by both. 
// For loop to 100 where the output is the index, but 
// with Fizz for filter 1, Buzz for 2 and FizzBuzz for 3. Otherwise just print the thing.
app.get('/api/fizzbuzz', function(req, res) {
    let message = "";
    for (let index = 1; index < 101; index++) {

        if ((index % 3) == 0 && (index % 5) != 0) {
            message += "Fizz<br/>";
        } else if ((index % 5) == 0 && (index % 3) != 0) {
            message += "Buzz<br/>";
        } else if ((index % 3) == 0 && (index % 5) == 0) {
            message += "FizzBuzz<br/>";
        } else {
            message += index + "<br/>";
        }
    }
    res.send(message)

})

const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// Database Seeding

const createTodos = async() => {
    const todo1 = new todoModel({
        title: "Feed the cat with the fish"
    });
    const todo2 = new todoModel({
        title: 'Walk the fish',
    });
    await todo1.save();
    await todo2.save();
};
//createTodos(); // uncomment only once. Otherwise you will end up with many of the same