import { Router } from 'express';

const router = Router();

router.get('/', async (req,res) => {
     
    function fizz() {
        for (let i = 1; i < 101; i++) {

            let result = "";
            if(i%3 === 0)
            {
                result = "Fizz";
            }
            if(i%5 === 0)
            {
                result += "Buzz";
            }
            if(result != "")
            {
                console.log(result);
            }
            else
            {
                console.log(i);
            }
            result ="";
        }
    }
    fizz();
})

export default router;