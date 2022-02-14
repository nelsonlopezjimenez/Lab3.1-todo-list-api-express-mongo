// TUNG
import { Router } from 'express';

const router = Router();

router.get('/', function (req, res) {
    let htmlBody = '',
        consoleBody = '';

    for(let i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 != 0) {
            htmlBody += 'Fizz </br>';
            consoleBody += 'Fizz\n>';
        } else if(i % 5 == 0 && i % 3 != 0) {
            htmlBody += 'Buzz </br>';
            consoleBody += 'Buzz\n>';
        } else if(i % 3 == 0 && i % 5 == 0) {
            htmlBody += 'FizzBuzz </br>';
            consoleBody += 'FizzBuzz\n>';
        } else {
            htmlBody += `${i} </br>`;
            consoleBody += `${i}\n>`;
        }
    }

    console.log(consoleBody);
    return res.send(htmlBody);
})

export default router;
//=====================

// jaohara
export const fizzBuzz = (req, res) => {
    for (let i = 1; i <= 100; i++) {
      console.log(
        `${i % 3 === 0 ? "Fizz" : ""}${i % 5 === 0 ? "Buzz" : ""}${i % 3 !== 0 && i % 5 !== 0 ? i : ""}`
      );
    }
  };
  //===========================

 // Paul MediaStreamTrack
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
    //===========================

    // joseph supples

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
//=======================

// Ashray
import { Router } from 'express';

const router = Router();

router.get('/', function (req, res) {
    for (number = 1; number <= 100; number++) {
        if (number % 3 == 0 && number % 5 == 0) {
            console.log('FizzBuzz');
        }
        else if (number % 3 == 0) {
            console.log("Fizz");	
        }
        else if (number % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(number);
        } 
    }



})
//============================
//sara Pettigrew

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
//======================================//Lucas Knesevich
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
//===============================
//ogarmela
for( var i=1; i<21; i++ ) {
    if( (i%3) === 0 && (i%5) === 0 ) {
        console.log( "FizzBuzz" );
    }else if( (i%3) === 0 ) {
        console.log( "Fizz" );
    }else if( (i%5) === 0 ) {
        console.log( "Buzz" );
    }else{
        console.log( i );
    }
}
//===========================
//jason buttler
import  { Router } from 'express';


const router = Router();

for (let i = 1; i <101; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log("fizzbuzz");
    } else if (i%3 === 0) {
        console.log("fizz");
    } else if (i%5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }

}

export default router;
//==========================
// Josh
import {Router} from 'express'; 

const router = Router(); 

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
//================================
// ladybird91
import  { Router } from 'express';

const router = Router();

router.get('api/fizzbuzz', function (req, res) {
    for (let i = 0; i < 100; i++) {
        if (i%3 === 0) {
            if (i%5 === 0) {
                console.log("FizzBuzz")
            } else {
                console.log("Fizz");
            }
        } else if (i%5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
})

export default router;
//=========================
