const express = require('express');
const hbs = require('express-handlebars');

const app = express();

const config = require('./config/config');

app.get('/', (req, res) => {
    res.send('hELOOOOOO')
})


app.listen(3000, () => {
    console.log(`Server is running on localhost:${config.PORT}....`);
})