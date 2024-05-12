const homeHandler = require("./home");
const staticFiles = require("./static-handler");
const cat = require('./cat')

module.exports = [homeHandler, staticFiles, cat];
