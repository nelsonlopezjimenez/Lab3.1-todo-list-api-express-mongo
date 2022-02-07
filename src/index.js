import cors from 'cors';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';



const app = express();
// Built-In Middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set('view engine', 'ejs');

// Database Server MongoDb Setup
app.use('/api/todo', routes.todo);
app.use('/api/fizzbuzz', routes.fizzbuzz)

// Custom Middleware

const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// Database Seeding

const createTodos = async () => {
    const todo1 = new models.Todo ({
        title: "Feed the cat with the fish"
    });
    const todo2 = new models.Todo( {
        title: 'Walk the fish',
    });
    await todo1.save();
    await todo2.save();
};
//createTodos(); // uncomment only once. Otherwise you will end up with many of the same
