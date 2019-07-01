const express = require('express');
const helmet = require('helmet');

const gamesRoutes = require('../routes/gamesRoutes');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/games', gamesRoutes)

server.get('/', (req, res) => {
    res.status(200).json({message: "API is Up"})
})

module.exports = server;