import { todoModel } from "../../models/models.js";

// api route handlers
const api = {
  getAllTodos: (req, res) => {
    todoModel.find()
      .then(todos => res.json(todos))
      .catch(err => res.send(err));
  },

  getTodoById: (req, res) => {
    todoModel.findById(req.params.id)
      .then(todos => res.json(todos))
      .catch(err => res.send(err))
  },

  createTodo: (req, res) => {
    todoModel.create({ title : req.body.title, })
      .then(newTodo => res.status(201).json(newTodo))
      .catch(err => res.send(err));
  },

  updateTodoById: (req, res) => {
    todoModel.findOneAndUpdate( {id: req.params.id}, req.body, {new:true})
      .then (todos => res.json(todos))
      .catch(err => res.send(err));
  },

  deleteTodoById: (req, res) => {
    todoModel.deleteOne({ _id: req.params.id }, )
      .then(() => res.json({'We deleted it!!': "we deleted it"}))
      .catch(err => res.send(err));
  },

  helloWorldRoute: (req, res) => res.send('Hello World!'),

  createTodos: async () => {
    const todo1 = new todoModel ({
      title: "Feed the cat with the fish"
    });
    const todo2 = new todoModel( {
      title: 'Walk the fish',
    });
    await todo1.save();
    await todo2.save();
  },
};

export default api;