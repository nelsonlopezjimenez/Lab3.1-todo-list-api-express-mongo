import dotenv from 'dotenv';
import express from 'express';

import models, {connectDb} from './models/index.js';
import routes from './routes/index.js';

const app = express();
dotenv.config();
// const port = 3000;

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set('view engine', 'ejs');

// Custom Middleware

// Routes
app.get('/', function (req, res) {
    res.send('Hello World')
});

app.use('/api/todo', routes.todo);

app.use('/api/fizzbuzz', routes.fizzbuzz)

const eraseDatabaseOnSync = true;
connectDb().then(async() =>{
    if(eraseDatabaseOnSync){
        await Promise.all([
            models.todoModel.deleteMany({}),
        ]);

        createTodos();
    }

    app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
);
});
// Database Seeding

const createTodos = async () => {
    const todo1 = new models.todoModel ({
        title: "Feed the cat with the fish"
    });
    const todo2 = new models.todoModel( {
        title: 'Walk the fish',
    });
    await todo1.save();
    await todo2.save();
};
