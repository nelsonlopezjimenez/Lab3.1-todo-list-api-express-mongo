import {Router} from 'express'; 

const router = Router(); 
//finished fizzbuzz
router.get('/', async (req, res) =>{
     var number;
     for(var i = 1; i <= 100; i++){
         if(i % 5 == 0 && i % 3 == 0){
              number = console.log("FizzBuzz");
         }else if(i % 5 == 0){
             number = console.log("Buzz")
         }else if(i % 3 == 0){
             number = console.log("Fizz");
         }else{
            number = console.log(i);
         }
              
     }
        return res.send(number ); 
    
});


export default router;