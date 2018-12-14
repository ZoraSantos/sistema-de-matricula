const mongoose = require('mongoose');
const ConnectionsConfig = require('../config/database');
const connectionInstance = ConnectionsConfig.mongo.getInstance;

exports.listAllMatriculas = async (req, res) => {
    connectionInstance().db.collection('matriculas').find({}).toArray((error, documents) => {
        if(error) {
            return res.status(400).json('error');
        }
        res.json(documents);
    });
};
exports.createMatricula = async (req, res) => {
        const data = req.body;
        const options = {};
        const callback = (error, documentCreated) => {
            if (error) {
                return res.status(400).json(error);
            }
            res.json(documentCreated);
        };
        connectionInstance.db.collection('matriculas').insertOne(data, options, callback);
    };
exports.updateMatricula = async (req, res) => {
        const id = req.query.id;
        const data = { $set: req.body };
        const filter = { _id: mongoose.Types.ObjectId(id) };
        const options = {};
        const callback = (error, documentUpdated) => {
            if(error) {
                return res.status(400).json(error);
            }
            res.json(documentUpdated);
        };
        connectionInstance.db.collection('matriculas').updateOne(filter, data, options, callback);
    };
exports.deleteMatricula = async(req, res) => {
        const id = req.query.id;
        const options = {};
        const filter = { _id: mongoose.Types.ObjectId(id)};
        const callback = (error, documentDeleted) => {
            if (error) {
                return res.status(400).json(error);
            }
            res.json(documentDeleted);
        };
        connectionInstance.db.collection('matriculas').deleteOne(filter, options, callback);
    };
