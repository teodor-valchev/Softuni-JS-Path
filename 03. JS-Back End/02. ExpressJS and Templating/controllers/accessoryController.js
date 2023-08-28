const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

function getAccessoryPage(req, res){
    res.render('createAccessory');
}

async function createAccessory(req, res){
    const {name, imageUrl, description} = req.body;
    await Accessory.create({name,imageUrl,description});

    res.redirect('/')
}

async function getAttachAccessoryPage(req,res) {
    const cubeId = req.params.cubeId;
    const currentCube = await Cube.findById(cubeId);
    const accessories = await Accessory.find();

    if (!currentCube) {
        res.render('404')
    }

    res.render('attachAccessory', { currentCube, accessories })
}

module.exports = {
    getAccessoryPage,
    createAccessory,
    getAttachAccessoryPage
}