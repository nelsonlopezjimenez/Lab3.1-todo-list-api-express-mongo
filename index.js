const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/cat', function (req, res) {
    res.send("WOOF, WOOF!!")
})

app.get('/:animal', function (req, res) {
    let buildString = "";
    if (req.params.animal == "dog") {
        buildString += "MEOW "
        res.send(buildString);
    } else {
        res.send("The animal is not in our zoo!!")
    }
})
app.get('/:animal/:numberOfTimes', function (req, res) {
    let buildString = "";
    let animal  = req.params.animal;
    let numberOfTimes = req.params.numberOfTimes
    if (animal == "dog") {
        for (i = 0; i < numberOfTimes ; i++) {
            buildString += "MEOW "
        }
        res.send(buildString);
    } else {
        res.send(`The ${animal} is not in our zoo`)
    }
})

app.listen(4444)