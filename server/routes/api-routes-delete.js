var Address = require('../data/address.js');
var Branch = require('../data/branch.js');
var BranchAddress = require('../data/branchAddress.js');
var Customer = require('../data/customer.js');
var CustomerAddress = require('../data/customerAddress.js');
var Rental = require('../data/rental.js');
var Vehicle = require('../data/vehicle.js');

module.exports = function (app) {
    app.delete("/api/delete/rental/:id", (req, res, next) => {
        Rental.delete({ _id: req.params.id })
        .then(data => res.status(200).json("Delete: Success!"))
        .catch(next)
    })
    
    app.delete("/api/delete/vehicle/:id", (req, res, next) => {
        Vehicle.delete({ _id: req.params.id })
        .then(data => res.status(200).json("Delete: Success!"))
        .catch(next)
    })
}