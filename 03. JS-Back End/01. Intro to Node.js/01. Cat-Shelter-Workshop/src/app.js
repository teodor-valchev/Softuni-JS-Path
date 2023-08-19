const express = require('express');

const app = express();

const viewEngine = require('./config/viewEngine');
const config = require('./config/config');

viewEngine(app);

app.use(express.static('src/public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats/add-cat', (req, res) => {
    res.render('addCat')
})


app.listen(3000, () => {
    console.log(`Server is running on localhost:${config.PORT}....`);
})