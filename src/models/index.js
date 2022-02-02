import mongoose from 'mongoose';
import Todo from './todo.js';

const connectDb = () => {
    return mongoose.connect('mongodb://localhost/tungnguyen')
};

const models = { Todo };

export { connectDb };

export default models;
