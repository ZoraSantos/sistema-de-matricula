const mongoose = require('mongoose');

const instances = {
    mongo: null,
    postgres: null,
    mysql: null
};

//configuration mongoose
exports.mongo = {
    start: () => {
        const connectionData = {
            URL:'mongodb://matricula:12345a@ds131814.mlab.com:31814/matricula'
        };

        instances.mongo = mongoose.createConnection(connection.URL);

        instances.mongo.on('open', () => {
            console.log('connected');
        });

        instances.mongo.on('error', () => {
            console.log('connection failed');
        });
        return instances.mongo;
    },
    getInstance: () => {
        return instances.mongo;
    }
};