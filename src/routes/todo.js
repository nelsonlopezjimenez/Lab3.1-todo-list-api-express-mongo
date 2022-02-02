import { Router } from 'express';
import models from '../models/index.js';

const router = Router();

router.get('/', function (req, res){
    models.todoModel.find()
    .then (function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
})


// router.get('/', async (req, res) => {
//     const todos = await req.context.models.todoModel.find();
//     return res.send(todos);
// });



router.get('/:id', function (req, res){
    models.todoModel.findById( req.params.id)
    .then (function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
})
router.post('/', function( req, res) {
    models.todoModel.create({
        title : req.body.title,
    })
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err) {
        res.send(err);
    });
});

router.put('/:id', function (req, res){
    models.todoModel.findOneAndUpdate( {id: req.params.id}, req.body, {new:true})
    .then (function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
});

router.delete('/:id', function (req, res){
    models.todoModel.deleteOne( { _id: req.params.id }, )
    .then (function() {
        res.json( { 'We deleted it!!': "we deleted it"});
    })
    .catch(function(err){
        res.send(err);
    });
});


export default router;


