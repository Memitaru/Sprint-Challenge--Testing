require('dotenv').config();

const server = require('./api/server');

const PORT = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`API listening at port ${PORT}`)
})