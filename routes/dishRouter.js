const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
    console.log(req.body);
    // Send back the response to the server
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //res.send(`This is an Express Server using Body Parser`);
    next();
})
.get((req, res, next) => {
    res.end('Send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: '+ req.body.name +' with details: '+ 
    req.body.description);
})
.put((req, res, next) => {
    res.end('PUT operation no supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all the dishes to you!');
});

module.exports = dishRouter;