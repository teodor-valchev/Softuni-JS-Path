const fs = require('fs')
const path = require('path')
const db = require('../data/db.json');

class Cat {
    constructor(name, description, upload, breed) {
        this.name = name;
        this.description = description;
        this.upload = upload;
        this.breed = breed;
    }

    static save(cat) {
        db.cats.push(cat);
        const data = JSON.stringify(db, null, 2);      
        fs.writeFileSync(path.resolve(__dirname, '../data/db.json'), data);
    }
}

module.exports = Cat;