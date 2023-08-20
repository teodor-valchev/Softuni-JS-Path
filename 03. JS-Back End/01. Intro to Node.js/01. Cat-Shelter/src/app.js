const express = require('express');

const app = express();

const viewEngine = require('./config/viewEngine');
const config = require('./config/config');
const router = require('./routes');

viewEngine(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({extended:true}))
app.use(router);


app.listen(3000, () => {
    console.log(`Server is running on localhost:${config.PORT}....`);
})