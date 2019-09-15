const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

const server = express();
server.use(bodyParser.json());
const routes = require("./src/router");

//Config. mongoose///
mongoose.connect('mongodb+srv://projetoShawee:batata@cluster0-90pmp.mongodb.net/hackathon?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(routes);

server.listen(port, console.log(`Running on port ${port}`));