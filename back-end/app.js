const express = require('express');
const react = require('react');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ConnectionsConfig = require('./config/database');
const RoutesMatricula = require('../routes/matricula-route');
const PORT = 3000;
const app = express();

ConnectionsConfig.mongo.start();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('ok');
});

RoutesMatricula.start(app);

const callback = () => {
    console.log(`Server running on port ${PORT}`)
}

app.listen(PORT, callback);