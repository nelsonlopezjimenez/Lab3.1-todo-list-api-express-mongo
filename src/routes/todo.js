import {Router} from 'express'; 

const router = Router(); 

router.get('/', async (req, res) =>{
    const todo = await req.context.models.Todo.find();
        return res.send(todo); 
    
});

router.get('/:id', async (req, res) =>{
    const todo = await req.context.models.Todo.findById(
        req.params.id
    );
        return res.send(todo); 
    
});

router.post('/', async (req, res) => {
    const todo = await req.context.models.Todo.create(req.body); 

    return res.send(todo); 
})

router.delete('/:id', async (req,res)=>{
    const todo = await req.context.models.Todo.findById(
        req.params.id
    );

    let result = null; 
    if(todo){
        result = await todo.remove(); 
    }

    return res.send(result); 
})

export default router;