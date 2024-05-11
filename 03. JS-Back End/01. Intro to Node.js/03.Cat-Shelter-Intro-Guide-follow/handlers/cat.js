const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
const formidable = require('formidable')
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

            const catBreedPlaceHolder = breeds.map(
                (breed) => `<option value="${breed}">${breed}</option>`
            );

            const modifiedData = data
                .toString()
                .replace(`{{catBreeds}}`, catBreedPlaceHolder);

            res.writeHead(200, {
                "Content-type": "text/html",
            });
            res.write(modifiedData);
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
    } else if (pathname === "/cats/add-cat" && req.method === "POST") {
        var form = new formidable.IncomingForm();
        //TODO: fileUplaod doesn't work as expected

        form.parse(req, function (err, fields, files) {
            if (err) {
                return err;
            }

            let oldPath = files.upload[0].filepath; 
            let newPath = path.normalize(
                path.join(__dirname, "../content/images/" + files.upload[0].newFilename)
            ); 
            fs.rename(oldPath, newPath, (err) => {
                if (err) throw err;
                console.log("Files was uploaded sccessfully!");
            });

            fs.readFile('../data/cats.json',"utf-8", (err, data) => {
                if (err) {
                    return err;
                }
                const allCats = JSON.parse(data)
                allCats.push({ id: cats.length = 1, ...fields, image: files.upload[0].filepath })
                const json = JSON.stringify(allCats)

                fs.writeFile('../data/cats.json', json, () => {
                    res.writeHead(301, {
                        Location: `/`,
                    }).end();
                })
            })
        })}
};
