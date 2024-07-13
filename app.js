const express = require("express");
const mongoConnector = require("./connectors/mongo.connector");
const redisConnector = require("./connectors/redis.connector");
const app = express();

// connectors

redisConnector.connect().then(mongoConnector.connect);

// loaders

module.exports = app;
