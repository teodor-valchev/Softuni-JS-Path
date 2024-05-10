const url = require("url");
const path = require("path");
const fs = require("fs");

function getContentType(url) {
    if (url.endsWith("css")) {
        return "text/css";
    } else if (url.endsWith("html")) {
        return "text/html";
    } else if (url.endsWith("jpg") || url.endsWith('ico')) {
        return "image/ico";
    }
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname.startsWith("/content") && req.method === "GET") {
        let filePath = path.join(__dirname, "../content/styles/site.css");

        if (pathname.endsWith('pawprint.ico')) {
            filePath = path.join(__dirname, "../content/images/pawprint.ico");
        }

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    "Content-Type": 'text/plain',
                });
                res.write("The provided file is corrupted!");
                res.end();
            }

            res.writeHead(200, {
                "Content-Type": getContentType(req.url),
            });
            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
};
