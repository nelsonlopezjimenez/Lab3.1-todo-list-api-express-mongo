import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

app.use(cors());

// Built-In Middleware

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set('view engine', 'ejs');

// ROUTES

app.use('/', routes.root);
app.use('/api/todos', routes.todo);
app.use('/api/fizzbuzz', routes.fizzbuzz);

// Database Seeding

const createTodos = async () => {
    const todo1 = new models.Todo ({
        title: "Feed the cat with the fish"
    });
    const todo2 = new models.Todo ( {
        title: 'Walk the fish',
    });
    await todo1.save();
    await todo2.save();
};


const eraseDatabaseOnSync = true;
connectDb().then(async() =>{
    if(eraseDatabaseOnSync){
        await Promise.all([
            models.Todo.deleteMany({}),
        ]);

        createTodos();
    }

    app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
);
});