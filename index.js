const morgan = require('morgan');
const bodyParser = require('body-parser');
const estudianteRouter = require('./routes/Router');
const express = require('express'),
     http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(bodyParser.json());

app.use('/estudiantes', estudianteRouter);
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});