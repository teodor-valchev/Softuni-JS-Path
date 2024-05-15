const Cube = require("../models/Cube");

exports.getAll = (search, from, to) => {
    let result = Cube.find().lean();

    //TODO: FIX THE SEARCH
    if (search) {
        result = cubes.filter((cube) =>
            cube.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (from) {
        result = result.filter((cube) => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter((cube) => cube.difficultyLevel <= Number(to));
    }

    return result;
};

exports.getCube = (cubeId) => Cube.findById(cubeId);

exports.createCube = (cubeData) => {
    const cube = new Cube(cubeData);
    return cube.save();
};

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    cube.accessories.push(accessoryId);
    return cube.save();
};
