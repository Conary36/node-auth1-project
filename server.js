const express = require('express')
const helmet = require('helmet');
const cors = require('cors');



const sunnyRouter = require('')

const server = express();

//MIDDLEWARE
server.use(helmet());
server.use(express.json());
server.use(cors());

//URL endpoints
server.use('/api/users', sunnyRouter)

server.get('/', (req, res)=>{
    res.json({api: "up" });
});

module.exports = server;