/* This webpack config differs a bit from our previous examples because it now must
   support the creation of 1) multiple bundles, and 2) the bundling of react code.
   The job of doing multiple bundles is easily supported by webpack and webpack-cli.
   However, for us to use react code in the browser we need to transpile it to ES6.
   This is done for us by a library called babel, and it's react preset. Babel is an
   industry standard code transpiler. To use it with webpack, we need the babel-loader
   library as well which allows it to hook in to webpacks build ecosystem.
*/

const path = require('path');

module.exports = {
    /* With webpack we can define a single, or multiple entries. In this case, we are
       defining three entry points into bundles called "example1", "example2", and "example3".
    */
    entry: {
        mainPage: './client/js/mainPage.js',
        herder: './client/js/Herder/main.js',
        // example3: './client/example3.jsx'
    },

    /* The module option in webpack helps us configure additional plugins. In this
       case, we are telling it to use the babel-loader library when building any .js
       and .jsx files. It intentionally excluses the node_modules folder in case we
       import any node_modules into our bundles.
    */
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //test everything that is a js or jsx file
                exclude: /node_modules/, //don't test nodemodules
                use: {
                    loader: "babel-loader", //run it through bable-loader
                },
            },
        ],
    },

    /* We are using the development build mode as we did last time. In package.json,
       our heroku-postbuild command will run webpack in production mode. This means
       we don't need to remember to build in production mode ourselves. Heroku will
       automatically run the heroku-postbuild command right before it removes all
       dev dependencies and launches our application.
    */
    mode: 'development',

    /* Output defines the output files. The path shows us what folder to put them in.
       hosted in this case. The filename defines the name of the output file. By
       putting [name] in the path, it will fill it in with the bundle name (defined in
        the entry field above). So for example, we will get example1bundle.js,
        example2bundle.js, and example3bundle.js as output files in the hosted folder.
    */
    output: {
        path: path.resolve(__dirname, 'hosted'),
        filename: '[name]bundle.js',
    },
};