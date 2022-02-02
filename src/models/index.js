import mongoose from 'mongoose';
import Todo from './todo';

const connectDb = () => {
    return mongoose.connect('mongodb://localhost/PaulTMaack')
};

const models = { Todo };

export { connectDb };

export default models;