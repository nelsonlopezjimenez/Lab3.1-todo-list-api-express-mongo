import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        title:{
            type: String,
        },
        isChecked:{
            type: Boolean,
            default: false,
        },
        date:{
            type: Date,
            default: new Date()
        },
    },
    {toObject: {virtuals: true}
});

const todoModel = mongoose.model("Todo", todoSchema);

export default todoModel;