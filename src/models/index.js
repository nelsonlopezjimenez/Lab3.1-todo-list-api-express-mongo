import mongoose from 'mongoose';
 
import Todo from './todo'; 

const connectDb = () => {
    return mongoose.connect('mongodb://localhost/joshuabordallo')
};

const models = {  Todo };

export { connectDb };

export default models;