const http = require('http');
const query = require('querystring');
const responses = require('responseBase.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const getUrlStruct = { };

const postUrlStruct = { };

const parseBody = (request, response, handler) => {
    const body = [];

    request.on('error', (err) => {
        console.dir(err);
        response.statusCode = 400;
        response.end();
    });

    request.on('data', (chunk) => {
        body.push(chunk);
    });

    request.on('end', () => {
        const bodyString = Buffer.concat(body).toString();
        request.body = query.parse(bodyString);
        handler(request, response);
    });
};

const onRequest = (request, response) => {
    const protocol = request.connection.encrypted ? 'https' : 'http';
    const parsedUrl = new URL(request.url, `${protocol}://${request.headers.host}`);

    request.query = Object.fromEntries(parsedUrl.searchParams);
    request.acceptedTypes = request.headers.accept.split(',');

    if (request.method === 'POST') {
        if (postUrlStruct[parsedUrl.pathname]) {
            parseBody(request, response, postUrlStruct[parsedUrl.pathname]);
        } else {
            getUrlStruct[404](request, response);
        }
    } else if (getUrlStruct[parsedUrl.pathname]) {
        getUrlStruct[parsedUrl.pathname](request, response);
    } else {
        getUrlStruct[404](request, response);
    }
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});
