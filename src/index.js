import 'dotenv/config';
// const express = require('express')
import express from 'express';  // CAN'T GET THIS TO WORK


import models, { connectDb } from './models';
import routes from './routes';

const app = express();

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set('view engine', 'ejs');

// Custom Middleware


// ROUTES
app.use('/api/todos', routes.todo);
app.use('/fizz', routes.fizz);



// Localhost homepage
app.get('/', function (req, res) {
    res.send('Hello!!')
})

// const port = process.env.PORT || 4444;

const eraseDatabaseOnSync = false;

connectDb().then(async () => {
    if (eraseDatabaseOnSync){
        await Promise.all([
            models.Todo.deleteMany({}),
        ]);
    }

    app.listen(process.env.PORT, () =>
        console.log(`Example app listening on port ${process.env.PORT}!`),
    );
});


// app.listen(port, () => {
//     console.log(`Server running on port ${port}`)
// })

// Database Seeding

const createTodos = async () => {
    const todo1 = new models.Todo ({
        title: "Feed the cat with the fish"
    });
    const todo2 = new models.Todo ({
        title: 'Walk the fish',
    });
    await todo1.save();
    await todo2.save();
};
// createTodos(); // uncomment only once. Otherwise you will end up with many of the same
