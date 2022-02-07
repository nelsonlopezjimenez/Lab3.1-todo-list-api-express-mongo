import  { Router } from 'express';


const router = Router();


router.get('/api/todos', async (req, res) => {
    const todo = await req.context.models.Todo.find();
    
    return res.send(todo);
});



router.get('/:/api/todos/:Id', async (req, res) => {
    const todo = await req.context.models.Todo.findById(
        req.params.todoId,
        );
        
        return res.send(todo);
});


router.post('/api/todos', async (req, res) => {
    const todo = await req.context.models.Todo.create (req.body);

    return res.send(todo);
});

router.put('/:/api/todos/:id', async (req, res) => {
    const todo = await req.context.models.Todo.findById(
        req.params.todoId,
        );
        
        return res.send(todo);
});


router.delete('/api/todos:id', async (req, res) => {
    const todo = await req.context.models.Todo.findById(
        req.params.todoId,
    );
    let result = null;
    if (todo){
        result = await recipe.remove();
    }
    
    return res.send(result);
});

router.get('/', async (req, res) => {
    const todo = await req.context.models.todo.find();
    return res.send(todo);
});

export default router;
