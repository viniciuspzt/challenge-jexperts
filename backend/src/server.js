const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./router');

const server = express();

mongoose.connect('mongodb+srv://zetta:zetta@clusterzetta-mcozz.mongodb.net/jexperts?retryWrites=true&w=majority', {
    useUnifiedTopology: true, useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);