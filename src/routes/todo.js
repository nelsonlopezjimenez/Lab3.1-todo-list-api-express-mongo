import { Router } from 'express';
import models from '../models/index';

const router = Router();

router.get('/', function (req, res){
    models.Todo.find()
    .then (function(todos){
        return res.json(todos);
    })
    .catch(function(err){
        return res.send(err);
    })
})

router.get('/:id', function (req, res){
    models.Todo.findById(req.params.id)
    .then (function(todos){
        return res.json(todos);
    })
    .catch(function(err){
        return res.send(err);
    })
})

router.post('/', function( req, res) {
    models.Todo.create({
        title : req.body.title,
        isChecked : req.body.isChecked
    })
    .then(function(newTodo){
        return res.status(201).json(newTodo);
    })
    .catch(function(err) {
        return res.send(err);
    });
});

router.put('/:id', function (req, res){
    models.Todo.findOneAndUpdate( {id: req.params.id}, req.body, {new:true})
    .then (function(todos){
        return res.json(todos);
    })
    .catch(function(err){
        return res.send(err);
    })
});

router.delete('/:id', function (req, res){
    models.Todo.deleteOne( { _id: req.params.id }, )
    .then (function() {
        return res.json( { 'We deleted it!!': "we deleted it"});
    })
    .catch(function(err){
        return res.send(err);
    });
});

router.get('/title/:title', function (req, res){
    models.Todo.findOne({
        title: req.params.title
    })
    .then (function(todos){
        return res.json(todos);
    })
    .catch(function(err){
        return res.send(err);
    })
})

export default router;
