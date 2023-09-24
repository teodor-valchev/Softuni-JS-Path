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
    const accessories = await Accessory.find().lean();

    if (!currentCube) {
        res.render('404')
    }

    res.render('attachAccessory', { currentCube, accessories })
}

async function postAttachAccessoryPage(req, res) {
    const cube = await Cube.findById(req.params.cubeId);
    const accessoryID = req.body.accessory;

    cube.accessories.push(accessoryID);
    cube.save();

    res.redirect(`/details/${cube._id}`)
}

module.exports = {
    getAccessoryPage,
    createAccessory,
    getAttachAccessoryPage,
    postAttachAccessoryPage
}