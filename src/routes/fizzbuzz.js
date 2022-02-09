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
