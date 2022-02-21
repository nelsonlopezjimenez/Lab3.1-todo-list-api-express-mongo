import { Router } from 'express';
import models from '../models';

const router = Router();

router.get('/', async (req, res) => {
    const todo = await req.context.models.Todo.find();
    return res.send(todo);
});

router.get('/api/todos', function (req, res){
    models.Todo.find()
    .then (function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
})
router.get('/api/todos/:id', function (req, res){
    models.Todo.findById( req.params.id)
    .then (function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
})
router.post('/api/todos', function( req, res) {
    models.Todo.create({
        title : req.body.title,
    })
    .then(function(newTodo){ 
        res.status(201).json(newTodo);
    })
    .catch(function(err) {
        res.send(err);
    });
});
router.put('/api/todos/:id', function (req, res){
    models.Todo.findOneAndUpdate( {id: req.params.id}, req.body, {new:true})
    .then (function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
});
router.delete('/api/todos/:id', function (req, res){
    models.Todo.deleteOne( { _id: req.params.id }, )
    .then (function() {
        res.json( { 'We deleted it!!': "we deleted it"});
    })
    .catch(function(err){
        res.send(err);
    });
});

export default router;