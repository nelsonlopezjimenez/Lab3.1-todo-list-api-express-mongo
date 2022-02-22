import { Router } from 'express';
import models from '../models';

const router = Router();

router.get('/', function (req, res){
  models.Todo.find()
  .then (function(todos){
      res.json(todos);
  })
  .catch(function(err){
      res.send(err);
  })
})

router.get('/:id', function (req, res){
  models.Todo.findById( req.params.id)
  .then (function(todos){
      res.json(todos);
  })
  .catch(function(err){
      res.send(err);
  })
})

router.post('/', function( req, res) {
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

router.put('/:id', function (req, res){
  models.Todo.findOneAndUpdate({id: req.params.id}, req.body, {new:true})
  .then (function(todos){
    res.json(todos);
  })
  .catch(function(err){
    res.send(err);
  })
});

router.delete('/:id', function (req, res){
  models.Todo.deleteOne({
    _id: req.params.id
  })
  .then (function() {
    res.json( { 'We deleted it!!': "we deleted it"});
  })
  .catch(function(err){
    res.send(err);
  });
});

router.get('/title/:title', function(req, res) {
  models.Todo.findOne ({ 
      title: req.params.title 
  })
  .then (function(todos) {
        res.json(todos);
  })
  .catch (function(err) {
        res.send(err);
  })
})

// This isn't working yet...
router.get('/status/:status', function(req, res) {
  models.Todo.find ({
    status: req.params.status
  })
  .then (function(todos) {
    res.json(todos);
  })
  .catch (function(err) {
    res.send(err);
  })
})



export default router;