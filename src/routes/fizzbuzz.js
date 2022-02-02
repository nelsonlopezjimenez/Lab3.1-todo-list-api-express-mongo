const express = require('express')
const app = express()
const mongoose = require('mongoose');

import { Router } from 'express';
const router = Router();


// Set up 3 filters. 1) Divisible by 3, and not 5.
// 2) Divisible by 5 and not 3.
// 3) Divisible by both. 
// For loop to 100 where the output is the index, but 
// with Fizz for filter 1, Buzz for 2 and FizzBuzz for 3. Otherwise just print the thing.
router.get('/api/fizzbuzz', function(req, res) {
    let message = "";
    for (let index = 1; index < 101; index++) {

        if ((index % 3) == 0 && (index % 5) != 0) {
            message += "Fizz<br/>";
        } else if ((index % 5) == 0 && (index % 3) != 0) {
            message += "Buzz<br/>";
        } else if ((index % 3) == 0 && (index % 5) == 0) {
            message += "FizzBuzz<br/>";
        } else {
            message += index + "<br/>";
        }
    }
    res.send(message)

})

export default router;