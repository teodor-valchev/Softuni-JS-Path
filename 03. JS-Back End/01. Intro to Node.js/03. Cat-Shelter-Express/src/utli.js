const fs = require("fs");
const path = require("path");
const fileCatPath = path.join(__dirname, "./data/cats.json");
const fileBreedPath = path.join(__dirname, "./data/breeds.json");

exports.renderCats = (res) => {
    fs.readFile(fileCatPath, "utf8", (err, data) => {
        if (err) {
            res.redirect("404");
            return;
        }

        const cats = JSON.parse(data);
        res.render("home", { cats: cats });
    });
};

exports.createCat = (req, res) => {
    const { name, description, img, breeds } = req.body;

    fs.readFile(fileCatPath, "utf8", (err, data) => {
        if (err) {
            res.redirect("404");
            return;
        }

        const parsedCats = JSON.parse(data);
        parsedCats.push({
            id: parsedCats.length + 1,
            name,
            description,
            img,
            breeds,
        });
        const json = JSON.stringify(parsedCats);

        fs.writeFile(fileCatPath, json, () => {
            res.redirect("/");
        });
    });
};

exports.createBreed = (req, res) => {
    const { breed } = req.body;

    fs.readFile(fileBreedPath, "utf-8", (err, data) => {
        if (err) {
            res.send("Invalid path");
            return;
        }
        const parsedBreeds = JSON.parse(data);
        parsedBreeds.push(breed);
        const json = JSON.stringify(parsedBreeds);

        fs.writeFile(fileBreedPath, json, () => {
            res.redirect("/");
        });
    });
};

exports.editCat = (currentCat, req, res) => {
    const { name, description, img, breeds } = req.body;

    fs.readFile(fileCatPath, "utf8", (err, data) => {
        if (err) {
            res.redirect("404");
            return;
        }

        const parsedCats = JSON.parse(data);
        const modifiedCats = parsedCats.map((cat) => {
            if (cat.id == currentCat.id) {
                return { id: cat.id, name, description, img, breeds };
            }
            return cat;
        });
        const json = JSON.stringify(modifiedCats);

        fs.writeFile(fileCatPath, json, () => {
            res.redirect("/");
        });
    });
};

exports.deleteCat = (catId, req, res) => {
    fs.readFile(fileCatPath, "utf8", (err, data) => {
        if (err) {
            res.redirect("404");
            return;
        }

        let parsedCats = JSON.parse(data);
        const newCats = parsedCats.filter((cat) => cat.id != catId);
        const json = JSON.stringify(newCats);

        fs.writeFile(fileCatPath, json, () => {
            res.redirect("/");
        });
    });
};
