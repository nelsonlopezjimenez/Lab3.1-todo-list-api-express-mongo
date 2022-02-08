import { Router } from 'express';
import { findByIdAndRemove } from '../models/todo';
const router = Router();

router.get('/', function (req, res) {
  // Create an empty string that will be "printed" once complete 
  let print = '';

  // For loop 1 up to 100
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {         // If i divded by 3 has no remainder and i divided by 5 has no remainder
      print += 'FizzBuzz </br>';                  // Add FizzBuzz to print string
    } else if (i % 3 === 0 && i % 5 != 0) {   // If i/3 has no remainder and i/5 has a remainder
      print += 'Fizz </br>';                      // Add Fizz to print
    } else if (i % 3 != 0 && i % 5 === 0) {   // If i/3 has a remainder and i/5 has no remainder
      print += 'Buzz </br>';                      // Add Buzz to print
    } else {
      print += `${i} </br>`                   // Otherwise add the number to print string
    }
  }

  res.send(print);    // Send the print string

})

export default router;
