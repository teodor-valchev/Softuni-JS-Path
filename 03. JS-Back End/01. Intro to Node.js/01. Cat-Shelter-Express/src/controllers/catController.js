const Cat = require('../models/Cat');
const save = require('../models/Breed');

const catsDb = require('../data/db.json');
const breedsDb = require('../data/breedDb.json')

function getHome (req , res) {
    res.render('home',{cats: catsDb.cats});
}

function getAddCat(req,res) {
    res.render('addCat', {breeds: breedsDb});
}

function postAddCat(req,res) {
    const {name, description, upload, breed} = req.body;
    const cat = new Cat(name, description, upload, breed);

    Cat.save(cat);

    res.redirect('/');
}

function getAddBreed(req, res) {
    res.render('addBreed');
}

function postAddBreed(req, res) {
    const breed = req.body.breed
    save(breed);
    
    res.redirect('/');
}

function getCatInfo(req, res) {
    const cat = catsDb.cats.find(x => x.id == req.params.catId);

    res.render(`editCat`,{ cat });
}
//supposed to edit but deletes
function changeCatInfo(req, res) {
    const cat = catsDb.cats.find(x => x.id == req.params.catId);
    const fe =  catsDb.cats.indexOf(cat);
    catsDb.cats.splice(fe, 1);

    res.redirect(`/`);
}
//doesn't work
function deleteCat(req,res) {
    res.send('hi');
}

module.exports = {
    getHome,
    getAddCat,
    getAddBreed,
    postAddBreed,
    postAddCat,
    getCatInfo,
    changeCatInfo,
    deleteCat
}


