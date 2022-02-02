const express = require('express')
const app = express();
exports.app = app;
const mongoose = require('mongoose');


// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set('view engine', 'ejs');

// Database Server MongoDb Setup

mongoose.connect('mongodb://localhost/ashraythapa',
    { useNewUrlParser: true });


const todoSchema = new mongoose.Schema({
    title: String,
    isChecked: { type: Boolean, default: false },
    date: { type: Date, default: new Date() }
});

const todoModel = mongoose.model("Todo", todoSchema);
exports.todoModel = todoModel;

app.get('/', function (req, res) {
    res.send('Hello World')
})

const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// Database Seeding

const createTodos = async () => {
    const todo1 = new todoModel ({
        title: "Feed the cat with the fish"
    });
    const todo2 = new todoModel( {
        title: 'Walk the fish',
    });
    await todo1.save();
    await todo2.save();
};
//createTodos(); // uncomment only once. Otherwise you will end up with many of the same
