import { Router } from 'express';
import models from '../models';

const router = Router();


router.get('/', async (req, res) => {
    const todos = await models.Todos.find(); 
    
    return res.send(todos);
})




router.get('/:id', async  (req, res)=>{
    const todos = await models.Todos.findById(req.params.id);
    
    return res.send(todos);
})
router.post('/', async ( req, res)=> {
    const todos = await models.Todos.create({
        title : req.body.title,
    });
   
    return res.send(todos);
});

router.put('/:id', async (req, res)=>{
    const todos = await models.Todos.findOneAndUpdate( {id: req.params.id}, req.body, {new:true});
    
    return res.send(todos);
});

router.delete('/:id', async (req, res)=>{
    const todos = await models.Todos.findById(
        req.params.id,
    );
    let result = null;
    if (todos){
        result = await Todos.remove();
    }
    
    return res.send(result);
});


export default router;

