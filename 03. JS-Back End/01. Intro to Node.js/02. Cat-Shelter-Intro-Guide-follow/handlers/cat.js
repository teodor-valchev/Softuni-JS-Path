const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
const formidable = require("formidable");
const breeds = require("../data/breeds");
const cats = require("../data/cats");

module.exports = async (req, res) => {
    const pathname = url.parse(req.url).pathname;
    const catId = Number(pathname.charAt(pathname.length - 1));

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
        const catPath = path.join(__dirname, "../data/cats.json");

        form.parse(req, function (err, fields, files = true) {
            if (err) {
                return err;
            }

            fs.readFile(catPath, (err, data) => {
                if (err) {
                    return err;
                }
                const allCats = JSON.parse(data);
                allCats.push({ id: cats.length + 1, ...fields });
                const json = JSON.stringify(allCats);

                fs.writeFile(catPath, json, () => {
                    res.writeHead(301, {
                        Location: `/`,
                    }).end();
                });
            });
        });
    } else if (pathname === `/cats/edit/${catId}` && req.method === "GET") {
        const filepath = path.join(__dirname, "../views/editCat.html");
        const cat = cats.find((x) => x.id === catId);

        fs.readFile(filepath, "utf8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            let modifiedData = data;
            modifiedData = modifiedData.replace("{{catId}}", cat.id);
            modifiedData = modifiedData.replace(
                "{{description}}",
                cat.description
            );
            modifiedData = modifiedData.replace("{{name}}", cat.name);
            modifiedData = modifiedData.replace(
                "{{catBreed}}",
                breeds.map(
                    (breed) => `<option value=${breed}>${breed}</option>`
                )
            );

            res.writeHead(200, {
                "Content-Type": "text/html",
            });
            res.write(modifiedData);
            res.end();
        });
    } else if (pathname === `/cats/edit/${catId}` && req.method === "POST") {
        const filepath = path.join(__dirname, "../data/cats.json");

        const form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files = true) {
            if (err) {
                console.log(err);
                return;
            }

            fs.readFile(filepath, (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                let cats = JSON.parse(data);
                cats = cats.map((cat) => {
                    if (cat.id === catId) {
                        return {
                            id: catId,
                            ...fields,
                        };
                    }
                    return cat;
                });
                const json = JSON.stringify(cats);

                fs.writeFile(filepath, json, () => {
                    res.writeHead(302, { Location: "/" });
                    res.end();
                });
            });
        });
    } else if (pathname === `/cats/delete/${catId}` && req.method === "GET") {
        const filepath = path.join(__dirname, "../data/cats.json");
        
        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            let cats = JSON.parse(data)
            if (cats.length === catId) {
                cats.pop()
            } else {
                cats = cats.splice(catId, 1)
            }

            const json = JSON.stringify(cats)

            fs.writeFile(filepath, json, () => {
                res.writeHead(302, { Location: "/" });
                res.end();
            })
        });
    }
}
