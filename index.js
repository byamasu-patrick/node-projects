const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const hostname = 'localhost';
const port = 3001;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

// app.get('/dishes/:dishId', (req, res, next) => {
//     res.end(`Will send details of the dish: ${ req.params.dishId } to you`);
// });

// app.post('/dishes/:dishId', (req, res, next) => {
//     res.end('POST operation no supported on /dishes/'+ req.params.dishId);
// });

// app.put('/dishes/:dishId', (req, res, next) => {
//     res.write('Updating the dish: '+ req.params.dishId); 
//     res.end('Will update the dish: '+ req.body.name +
//     ' with details: '+ req.body.description);
// });

// app.delete('/dishes/:dishId', (req, res, next) => {
//     res.end('Deleting dish: '+ req.params.dishId);
// });
// Setting express to use static files saved in the public folder
app.use('/dishes', dishRouter);
app.use(express.static(__dirname +"/public"));

app.use((req, res, next) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<html><body>
        <h1>This is an Express Server</h1>
     </body></html>`);
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${ hostname }:${ port }`);
});