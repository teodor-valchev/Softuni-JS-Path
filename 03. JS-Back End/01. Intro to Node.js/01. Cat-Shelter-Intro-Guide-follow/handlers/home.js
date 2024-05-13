const url = require("url");
const fs = require("fs");
const path = require("path");
const cats = require('../data/cats.json')

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === "/" && req.method === "GET") {
        const filePath = path.join(__dirname, "../views/home/index.html");

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    "Content-Type": "text/plain",
                });
                res.write("Something went wrong!");
                res.end();
            }

            const catTemplate = cats.map(
                (cat) => `
                <li>
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg" alt="Black Cat">
                    <h3>${cat.name}</h3>
                    <p><span>Breed: </span>${cat.breed}</p>
                    <p><span>Description: </span>${cat.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="/cats/edit/${cat.id}">Change Info</a></li>
                        <li class="btn delete"><a href="/cats/delete/${cat.id}">New Home</a></li>
                    </ul>
                </li>`
            );
            const modifiedData = data.toString().replace('{{cats}}', catTemplate)
            res.writeHead(200, {
                "Content-Type": "text/html",
            });
            res.write(modifiedData);
            res.end();
        });
    } else {
        return true;
    }
};
