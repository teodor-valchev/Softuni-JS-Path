const breedDb = require('../data/breedDb.json');
const fs = require('fs');
const path = require('path');

function save (breed) {
    breedDb.push(breed);
    const data = JSON.stringify(breedDb,null,2);
    fs.writeFileSync(path.resolve(__dirname,'../data/breedDb.json'), data);
}

module.exports = save;