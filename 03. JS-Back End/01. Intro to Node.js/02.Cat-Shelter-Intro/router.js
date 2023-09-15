const fs = require('fs');
const homeTemplate = fs.readFileSync('./views/home/index.html',{ encoding: 'utf-8' });
const cssFile = fs.readFileSync('./content/styles/site.css',{ encoding: 'utf-8' });
const catsBreedTemplate = fs.readFileSync('./views/addBreed.html',{ encoding: 'utf-8' });
const addCatTemplate = fs.readFileSync('./views/addCat.html',{ encoding: 'utf-8' });

const catsDb = fs.readFileSync('./data/catsDB.json', { encoding: 'utf-8' })


function router (url, res) {
    if (url === '/') {
        const parsedCats = JSON.parse(catsDb);
        parsedCats.cats.forEach(cat => {
            res.write(homeTemplate.replace('name',cat.name));
            
        });
        console.log(homeTemplate);
        //res.write(homeTemplate);
    } else if (url === '/content/styles/site.css') {
        res.write(cssFile);
    } else if (url === '/cats/add-breed') {
        res.write(catsBreedTemplate);
    } else if (url === '/cats/add-cat') {
        res.write(addCatTemplate);
    }
    res.end();
}

module.exports = router;