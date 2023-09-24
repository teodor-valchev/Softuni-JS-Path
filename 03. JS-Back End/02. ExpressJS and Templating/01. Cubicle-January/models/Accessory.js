const mongoose = require('mongoose');

const accessorySchema =  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    }
    //relation to cubes
})

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;