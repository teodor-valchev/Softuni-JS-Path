const mongoose = require("mongoose");
const { URI } = require("../constants");

async function dbConfig() {
    try {
        await mongoose.connect(URI);
        console.log('Successfully connected to DB!');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = dbConfig;
