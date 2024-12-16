const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressHandlebars = require('express-handlebars');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();

app.use('/robots.txt', express.static(path.resolve(`${__dirname}/../hosted/robots.txt`)));

app.use('/assets', express.static(path.resolve(`${__dirname}/../hosted/`)));

app.use(compression());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: '',
}));
app.set('view engine', 'handlebars');

app.set('views', `${__dirname}/../views`);

app.use(favicon(`${__dirname}/../hosted/img/favicon/android-chrome-512x512.png`));

router(app);

app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`listening on port ${port}`);
});
