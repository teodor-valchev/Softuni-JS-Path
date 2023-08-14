const http = require('http');
const url = require('url');
const homePage = require('./resources/views/home/index')



const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    let contentType = 'text/html'
    res.writeHead(200, { "Content-Type": contentType });
    console.log(pathname);

    if (pathname === '/') {
        res.write(homePage);
    }
    else if (pathname.endsWith('/site.css')) {
        res.writeHead(200, { "Content-Type": "text/css" });
    }
    res.end();
})

server.listen(3000);