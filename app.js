'use strict';

let fs = require('fs');
let https = require('https');

let privateKey  = fs.readFileSync('./https/selfsigned.key', 'utf8');
let certificate = fs.readFileSync('./https/selfsigned.crt', 'utf8');

let credentials = {key: privateKey, cert: certificate};

let express = require('express');
// create express instance
let app = express();

app.set('port', process.env.PORT || 4000);
app.set('ipaddr', process.env.IP || "127.0.0.1");

// serve static files
app.use(express.static(__dirname + ''));

// client express routes
require('./routes.js')(app);

let httpsServer = https.createServer(credentials, app);

// httpsServer.listen(8443);

// express app listener
httpsServer.listen(app.get('port'), function () {
    console.log('Express server https://' + app.get('ipaddr') + ' listening on port ' + app.get('port'));
});