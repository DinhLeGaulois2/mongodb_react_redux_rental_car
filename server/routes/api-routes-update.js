var objectId = require('mongodb').ObjectId

var Address = require('../models/address.js');
var Branch = require('../models/branch.js');
var Branch_addr = require('../models/branch_addr.js');
var Customer = require('../models/customer.js');
var CustomerAddress = require('../models/customerAddress.js');
var Rental = require('../models/rental.js');
var Vehicle = require('../models/vehicle.js');

module.exports = function (app) {
    app.put("/api/update/rental/:id", (req, res, next) => {
        let obj = {}
        if (req.body.pickup_data != undefined) obj.pickup_data = req.body.pickup_data
        if (req.body.dropoff_data != undefined) obj.dropoff_data = req.body.dropoff_data
        if (req.body.customerId != undefined) obj.customerId = req.body.customerId
        if (req.body.vehicleId != undefined) obj.vehicleId = req.body.vehicleId
        Rental.updateOne({ _id: req.params.id },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })
    
    app.put("/api/update/customer/:id", (req, res, next) => {
        let obj = {}
        if (req.body.lName != undefined) obj.lName = req.body.lName
        if (req.body.fName != undefined) obj.fName = req.body.fName
        Customer.updateOne({ _id: req.params.id },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })
    
    app.put("/api/update/vehicle/:id", (req, res, next) => {
        let obj = {}
        if (req.body.available != undefined) obj.available = req.body.available
        if (req.body.odometer != undefined) obj.odometer = req.body.odometer
        if (req.body.make != undefined) obj.make = req.body.make
        if (req.body.model != undefined) obj.model = req.body.model
        if (req.body.condition != undefined) obj.condition = req.body.condition
        Vehicle.updateOne({ _id: req.params.id },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })
    
    app.put("/api/update/address/:id", (req, res, next) => {
        let obj = {}
        if (req.body.streetAddr != undefined) obj.streetAddr = req.body.streetAddr
        if (req.body.city != undefined) obj.city = req.body.city
        if (req.body.state != undefined) obj.state = req.body.state
        if (req.body.zip != undefined) obj.zip = req.body.zip
        Address.updateOne({ _id: req.params.id },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })
}