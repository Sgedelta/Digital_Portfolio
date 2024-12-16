const models = require('../models');

// renders the index page view
const hostIndex = async (req, res) => {
    // this is where we would "get data" - if we had data to get from a database or something.

    res.render('index', {
        title: "Sam Easton's Portfolio",
    });
};
module.exports.index = hostIndex;

const notFound = async (req, res) => {
    res.render('notFound');
};
module.exports.notFound = notFound;