const express = require('express');
const mongoose = require('mongoose');

const server = express();
server.use(express.json());

//Config. mongoose///
mongoose.connect("mongodb://localhost:27017/projetoShawee", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});
require('./src/models/User');

server.use(require('./src/router'));

server.listen(8080);