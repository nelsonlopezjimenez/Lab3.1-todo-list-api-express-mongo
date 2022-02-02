// Joseph Supples

import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes/index.js';

const app = express();






// Custom Middleware
app.use(cors());

//Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// Routes
// routes mounted as modular routes. Each route receives a URI

//Root Route
app.get('/', function (req, res) {
    res.send('Hello World')
});

//Todos Routes
app.use('/api/todos', routes.todos);

app.use('/api/fizzbuzz', routes.fizzbuzz);



const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// Database Seeding

const eraseDatabaseOnSync = true;

connectDb().then( async () => { 
    if (eraseDatabaseOnSync){
    await Promise.all([
        models.Todos.deleteMany({}),
    ]);

    createTodos(); //PENDING run only once or eraseOnSync
}

});

const createTodos = async () => {
    const todo1 = new models.Todos ({
        title: "Feed the cat with the fish"
    });
    const todo2 = new models.Todos ( {
        title: 'Walk the fish',
    });
    await todo1.save();
    await todo2.save();
};

