import dotenv from 'dotenv';
import express from 'express';
import models, { connectDb } from './src/models/index.js';
import routes from './src/routes/index.js';

const app = express();
dotenv.config();

// * MIDDLEWARES * //
// Built-In Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set('view engine', 'ejs');

// * ROUTES * //
// Mount routes as modular routes. Each route receives a URI
app.use('/', routes.root);
app.use('/api/todos', routes.todo);
app.use('/api/fizzbuzz', routes.fizzbuzz);

// * START * //
// SERVER PORT LISTENING
// Connect asynchronously and start listening
const eraseDatabaseOnSync = true;

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

// createTodos(); // uncomment only once. Otherwise you will end up with many of the same
