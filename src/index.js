import 'dotenv/config';
import cors from 'cors';
import express from 'express';


import models, { connectDb } from './models';
import routes from './routes';

const app = express();
const port = process.env.PORT;
// * Application-Level Middleware * //

// Third-Party Middleware
app.use(cors());

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(async (req, res, next) => {
    req.context = {
        models,
        
    };
    next();
});

app.use('/api/todo', routes.todo); 
app.use('/api/fizzbuzz', routes.fizzbuzz); 


const eraseDatabaseOnSync = false;

connectDb().then(async () => {
    if (eraseDatabaseOnSync){
        await Promise.all([
             models.Todo.deleteMany({}), 
        ]);

         
        //createRecipes(); //PENDING run only once or eraseOnSync
    }
    app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`),
    );
});