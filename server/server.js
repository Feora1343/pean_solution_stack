// Generic server.js file. Replace lines of code as needed. Below is simply
// a generic template that allows a PEAN server to run.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routerName = require('./routers/router-name')
const path = require( 'path' );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // NEEDED FOR ANGULARJS
app.use(express.static('server/public'));
app.use('/foods', foodRouter);

let port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('up and running on port', port);
});