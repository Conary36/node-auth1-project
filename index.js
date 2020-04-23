const server = require('./server.js');

const port = process.env.PORT ||5000;
server.listen(port, ()=>{
    console.log(`\n**Fire in port ${port} Hole!**\n`)
})