const express = require('express');

const server = express();
server.use(express.json());

server.use(require('./src/router'));

server.listen(8080);