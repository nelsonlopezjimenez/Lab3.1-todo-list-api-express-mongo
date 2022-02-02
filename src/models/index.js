import Mongoose from 'mongoose';
import todoModel from './todo.js';

const connectDb = () => {
    return Mongoose.connect('mongodb://localhost/sarahpettigrew')
};

const models = {todoModel};

export{connectDb};
export default models;