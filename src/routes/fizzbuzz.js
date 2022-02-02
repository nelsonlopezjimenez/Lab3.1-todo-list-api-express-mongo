import { Router } from 'express';
import models from '../models/index.js';

const router = Router();

router.get('/', function (req, res){
    let nums = "";
    for(let i = 1; i <= 100; i++){
        if(i%3===0){
            nums += "Fizz";
        }
        if(i%5===0){
            nums += "Buzz"
        }
        if (nums.length === 0){
            nums = i;
        }
        console.log(nums);
        nums = "";
    }
})

export default router;


