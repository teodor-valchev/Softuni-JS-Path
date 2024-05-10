const http = require("http");
const handlers = require('./handlers')
const PORT = 3000;

const server = http.createServer((req, res) => {
    
    for (const handler of handlers) {
        if (!handler(req,res)) {
            break
        }
    }
});

server.listen(PORT, () =>
    console.log(`Server is running on port: ${PORT}....`)
);
