import { Router } from 'express';

const router = Router();

router.get('/', function (req, res) {
    let htmlBody = '';
    for(let i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 != 0) {
            htmlBody += 'Fizz </br>';
        } else if(i % 5 == 0 && i % 3 != 0) {
            htmlBody += 'Buzz </br>';
        } else if(i % 3 == 0 && i % 5 == 0) {
            htmlBody += 'FizzBuzz </br>';
        } else {
            htmlBody += `${i} </br>`;
        }
    }
    return res.send(htmlBody);
})

export default router;
