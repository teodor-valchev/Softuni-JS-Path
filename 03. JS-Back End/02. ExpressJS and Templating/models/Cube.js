const mongoose = require('mongoose');

const cubeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
    },
    imageUrl: {
        type: String,
        required: true, //http validation
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    }
    //Accesory reference
});

const Cube = mongoose.model('Cube', cubeSchema );

module.exports = Cube;