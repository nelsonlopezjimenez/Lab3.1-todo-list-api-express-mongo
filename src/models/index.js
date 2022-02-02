import mongoose from 'mongoose';
import Todos from './todos'

// Database Server MongoDb Setup

const connectDb = () => {
    return mongoose.connect('mongodb://localhost/josephsupples')
};

const models = { Todos };

export { connectDb };

export default models; 
