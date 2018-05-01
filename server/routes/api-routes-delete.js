var objectId = require('mongodb').ObjectId

var Address = require('../models/address.js');
var Branch = require('../models/branch.js');
var BranchAddress = require('../models/branchAddress.js');
var Customer = require('../models/customer.js');
var CustomerAddress = require('../models/customerAddress.js');
var Rental = require('../models/rental.js');
var Vehicle = require('../models/vehicle.js');

module.exports = function (app) {
    app.delete("/api/delete/rental/:id", (req, res, next) => {
        Rental.delete({ _id: objectId(req.params.id) })
        .then(data => res.status(200).json("Delete: Success!"))
        .catch(next)
    })
    
    app.delete("/api/delete/vehicle/:id", (req, res, next) => {
        Vehicle.delete({ _id: objectId(req.params.id) })
        .then(data => res.status(200).json("Delete: Success!"))
        .catch(next)
    })
}