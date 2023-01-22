const handelbars = require('express-handlebars');

function seupViewEngine(app) {
    app.engine('hbs', handelbars.engine({
        extname: 'hbs',
    }));
    app.set('view engine', 'hbs')
    app.set('views', './src/views');
}

module.exports = seupViewEngine;