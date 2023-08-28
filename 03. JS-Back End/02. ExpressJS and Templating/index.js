const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const main = require('./config/detabaseInit');

const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);

    main()
    .then(() => app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`)))
    .catch((err) => console.error(err))