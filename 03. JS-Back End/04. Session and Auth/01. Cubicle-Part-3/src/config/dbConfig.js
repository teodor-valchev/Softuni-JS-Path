const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/Cubicle";

async function dbConfig() {
    try {
        await mongoose.connect(uri);
        console.log("DB Successfully connected!");
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
}

module.exports = dbConfig;
