// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
// app.get('/', (req, res) => {
//   res.send("server.js - get ....");
// });

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
Promise = require('bluebird');
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/rental_car");
var db = mongoose.connection;

db.on("error", function (err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function () {
    console.log("Mongoose connection successful.");
});

// Requiring our models for syncing
var initValues = require("./server/data/initDataController.js");

// Import routes and give the server access to them.
require("./server/routes/api-routes-insert.js")(app);
require("./server/routes/api-routes-read.js")(app);
require("./server/routes/api-routes-delete.js")(app);
require("./server/routes/api-routes-update.js")(app);
require("./server/routes/html-routes.js")(app);
// -------------------------------------------------

var initValues = require("./server/data/initDataController.js");

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => {
    // initValues();
    console.log("App listening on PORT: " + port);
});