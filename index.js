import api from "./routes/handlers/api.js";

import express from "express";
const app = express();
const port = process.env.PORT || 4444;

// Built-In Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set('view engine', 'ejs');

// Custom Middleware

// Routes
app.get('/api/todos', api.getAllTodos);
app.get('/api/todos/:id', api.getTodoById);
app.post('/api/todos', api.createTodo);
app.put('/api/todos/:id', api.updateTodo);
app.delete('/api/todos/:id', api.deleteTodoById);
app.get('/', api.helloWorldRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));

// Database Seeding
// api.createTodos(); 