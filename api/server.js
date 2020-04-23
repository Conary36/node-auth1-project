const express = require('express')
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');


const sunnyRouter = require('../users/users-router.js')
const authRouter = require("../auth/auth-router.js")
const server = express();
const sessionConfig = {
    name: 'SunnyDay',
    secret: 'sunnySecret',
    cookie: {
        maxAge: 3600 * 1000,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false
}

//MIDDLEWARE
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig))

//URL endpoints
server.use('/api/users', sunnyRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res)=>{
    res.json({api: "up" });
});

module.exports = server;