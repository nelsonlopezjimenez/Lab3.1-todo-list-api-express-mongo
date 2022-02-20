const express = require('express')
const app = express()
const mongoose = require('mongoose');


// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set('view engine', 'ejs');

// Database Server MongoDb Setup

mongoose.connect('mongodb://localhost/typicode2',
    { useNewUrlParser: true });


const todoSchema = new mongoose.Schema({
    title: String,
    isChecked: { type: Boolean, default: false },
    date: { type: Date, default: new Date() }
});

const todoModel = mongoose.model("Todo", todoSchema);

const customerSchema = new mongoose.Schema({
    id: { type: String, },
    name: { type: String, },
    username: { type: String, },
    email: { type: String, },
    address: {
        street: { type: String, },
        suite: { type: String, },
        city: { type: String, },
        zipcode: { type: String, },
        geo: {
            lat: { type: String, },
            lng: { type: String, },
        },
    },
    phone: { type: String, },
    website: { type: String, },
    company: {
        name: { type: String, },
        catchPhrase: { type: String, },
        bs: { type: String, },
    },
});

const Customer = mongoose.model('Customer', customerSchema);
// Custom Middleware

// Routes

app.get('/api/customers', function (req, res) {
    Customer.find()
        .then(function (customers) {
            res.json(customers);
        })
        .catch(function (err) {
            res.send(err);
        })
})

app.get('/api/customers/:id', function (req, res) {
    Customer.findById(req.params.id)
        .then(function (customers) {
            res.json(customers);
        })
        .catch(function (err) {
            res.send(err);
        })
})
app.post('/api/customers', function (req, res) {
    Customer.create({
        id: req.body.id,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: {
            street: req.body.address.street,
            suite: req.body.address.suite,
            city: req.body.address.city,
            zipcode: req.body.zipcode,
            geo: {
                lat: req.body.address.geo.lat,
                lng: req.body.address.geo.lng,
            },
        },
        phone: req.body.phone,
        website: req.body.website,
        company: {
            name: req.body.company.name,
            catchPhrase: req.body.company.catchPhrase,
            bs: req.body.company.bs,
        },
    })
        .then(function (newTodo) {
            res.status(201).json(newTodo);
        })
        .catch(function (err) {
            res.send(err);
        });
});

app.put('/api/customers/:id', function (req, res) {
    Customer.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
        .then(function (customers) {
            res.json(customers);
        })
        .catch(function (err) {
            res.send(err);
        })
});

app.delete('/api/customers/:id', function (req, res) {
    Customer.deleteOne({ _id: req.params.id },)
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
        })
})

app.get('/api/todos/:id', function (req, res) {
    todoModel.findById(req.params.id)
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function (err) {
            res.send(err);
        })
})
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
        })
});

app.delete('/api/todos/:id', function (req, res) {
    todoModel.deleteOne({ _id: req.params.id },)
        .then(function () {
            res.json({ 'We deleted it!!': "we deleted it" });
        })
        .catch(function (err) {
            res.send(err);
        });
});

app.get('/', function (req, res) {
    res.send('Hello World')
})

const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// Database Seeding

const createTodos = async () => {
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
