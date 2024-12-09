const controllers = require('./controllers');

const router = (app) => {
    // specific pages go here
    // app.get('')

    // index page
    app.get('/', controllers.mainPage.index);

    //Herder
    app.get('/herder', controllers.projects.hostHerder);

    // 404 page
    app.get('/*', controllers.mainPage.notFound);

    // post commands if there are any? - probably not.
};
module.exports = router;
