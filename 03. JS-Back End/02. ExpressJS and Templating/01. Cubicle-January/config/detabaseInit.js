const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/Cubicle'

async function  main() {
    await mongoose.connect(uri);

    console.log('DB Connected');
}

module.exports = main;