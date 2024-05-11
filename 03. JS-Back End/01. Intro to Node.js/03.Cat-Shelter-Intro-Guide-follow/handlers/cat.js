const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
const breeds = require("../data/breeds");
const cats = require("../data/cats");

module.exports = async (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === "/cats/add-cat" && req.method === "GET") {
        const filepath = path.join(__dirname, "../views/addCat.html");

        fs.readFile(filepath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    "Content-type": "plain/text",
                });
                res.write("Couldn\t find file!");
                res.end();
            }

            res.writeHead(200, {
                "Content-type": "text/html",
            });
            res.write(data);
            res.end();
        });
    } else if (pathname === "/cats/add-breed" && req.method === "GET") {
        const filepath = path.join(__dirname, "../views/addBreed.html");

        fs.readFile(filepath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    "Content-type": "plain/text",
                });
                res.write("Couldn\t find file!");
                res.end();
            }

            res.writeHead(200, {
                "Content-type": "text/html",
            });
            res.write(data);
            res.end();
        });
    } else if (pathname === "/cats/add-breed" && req.method === "POST") {
        let formData = "";

        req.on("data", (data) => {
            formData += data;
        }).on("end", () => {
            let body = qs.decode(formData);
            const filepath = path.join(__dirname, "../data/breeds.json");

            fs.readFile(filepath, (err, data) => {
                if (err) {
                    return err;
                }
                let breeds = JSON.parse(data);
                breeds.push(body.breed);
                let json = JSON.stringify(breeds);

                fs.writeFile(filepath, json, () =>
                    console.log("The breed has been uploaded successfully!")
                );
            });
            res.writeHead(301, {
                Location: `/`,
            }).end();
        });
    }
};
