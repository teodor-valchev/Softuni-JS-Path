const jsonwebtoken = require("jsonwebtoken");
const { promisify } = require("util");

// making the jwt working with promisses
const jwt = {
    sign: promisify(jsonwebtoken.sign),
    verify: promisify(jsonwebtoken.verify),
};

module.exports = jwt;
