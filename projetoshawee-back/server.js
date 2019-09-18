const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors')

const port = process.env.PORT || 3001;

const server = express();
server.use(bodyParser.json());
const routes = require("./src/router");
server.use(cors())

//Config. mongoose///
mongoose.connect('mongodb+srv://projetoShawee:batata@cluster0-90pmp.mongodb.net/hackathon?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(routes);

server.listen(port, console.log(`Running on port ${port}`));