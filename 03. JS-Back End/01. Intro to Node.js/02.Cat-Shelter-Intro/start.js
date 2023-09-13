const http = require('http');
const router = require('./router');
const fs = require('fs');
const port = 3000;


const server = http.createServer((req,res) => {
    const { url } = req;
    console.log(url);

    router(url, res);
})

server.listen(3000,(() => console.log(`Server is listening on PORT ${port}...`)))