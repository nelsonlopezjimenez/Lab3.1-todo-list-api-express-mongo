const { app, todoModel } = require("./index");
const { app, todoModel } = require("./index");


// Routes 

app.delete('/api/todos/:id', function (req, res) {
    todoModel.deleteOne({ _id: req.params.id })
        .then(function () {
            res.json({ 'We deleted it!!': "we deleted it" });
        })
        .catch(function (err) {
            res.send(err);
        });
});


app.get('/api/todos', function (req, res) {
    todoModel.find()
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function (err) {
            res.send(err);
        });
});
app.get('/api/todos/:id', function (req, res) {
    todoModel.findById(req.params.id)
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function (err) {
            res.send(err);
        });
});
app.post('/api/todos', function (req, res) {
    todoModel.create({
        title: req.body.title,
    })
        .then(function (newTodo) {
            res.status(201).json(newTodo);
        })
        .catch(function (err) {
            res.send(err);
        });
});

app.put('/api/todos/:id', function (req, res) {
    todoModel.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function (err) {
            res.send(err);
        });
});
