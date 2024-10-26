const controllers = require('./controllers');

const router = (app) => {
    // specific pages go here
    // app.get('')

    // index page
    app.get('/', controllers.index);

    // 404 page
    app.get('/*', controllers.notFound);

    // post commands if there are any? - probably not.
};
module.exports = router;
