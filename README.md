## Express Server Todo list

### Combination of Colt Steele and Robert Wieruch online tutorials

### Step One

1. run "npm install"
1. Make sure that mongo server is running and port 27017 of localhost is responding appropriately.
1. run "node index.js"
1. Using curl/Postman add/modify/delete items in the todo list.
1. If you do not have Mongo Extension in VS Code, please add it: MongoDB for VS Code

### Assign to student Lab 3.1

1. Refactor the code in index.js file so the routes, the models, and other code is located in different folders. Use the "recipes-api" app as a reference, and/or run "npx express-generator" following the instructions in expressjs.com/en/starter/generator.html


## File structures

### recipe-w-message app:
~~~
  |_ package.json
  |_ .babelrc
  |_ .env
  |_ .gitignore
  |_ src
    |_ index.js
    |_ models
    |        |_ index.js
    |        |_ recipe.js
    |        |_ users.js message.js
    |_ routes
    |        |_ index.js
    |        |_ recipe.js 
    |        |_ users.js messages.jd session.js
    |_ node_modules
    |_ README.md


todo-list app
     |_ package.json
     |_ index.js
     |_ node_modules
     |_ README.md
     |_ .gitignore
     |_ .env
~~~
```js
{
  "name": "todo-list-api-with-mongo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^11.0.0",
    "ejs": "^3.1.6",
    "express": "^4.17.2",
    "mongoose": "^6.1.6"
  },
  "devDependencies": {
    "@babel/core": "^7.16.7",
    "@babel/node": "^7.16.8",
    "@babel/preset-env": "^7.16.8",
    "nodemon": "^2.0.15"
  }
}
```
```js
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

```