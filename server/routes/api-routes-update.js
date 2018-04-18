var Address = require('../data/address.js');
var Branch = require('../data/branch.js');
var BranchAddress = require('../data/branchAddress.js');
var Customer = require('../data/customer.js');
var CustomerAddress = require('../data/customerAddress.js');
var Rental = require('../data/rental.js');
var Vehicle = require('../data/vehicle.js');

module.exports = function (app) {
    app.put("/api/update/rental/:id", (req, res, next) => {
        let obj = {}
        if (req.body.pickup_data != undefined) obj.pickup_data = req.body.pickup_data
        if (req.body.dropoff_data != undefined) obj.dropoff_data = req.body.dropoff_data
        if (req.body.customerId != undefined) obj.customerId = req.body.customerId
        if (req.body.vehiculeId != undefined) obj.vehiculeId = req.body.vehiculeId
        Rental.updateOne({ _id: req.params.id },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })
    
    app.put("/api/update/customer/:id", (req, res, next) => {
        let obj = {}
        if (req.body.last_name != undefined) obj.last_name = req.body.last_name
        if (req.body.first_name != undefined) obj.first_name = req.body.first_name
        if (req.body.middle_name != undefined) obj.middle_name = req.body.middle_name
        Customer.updateOne({ _id: req.params.id },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })
    
    app.put("/api/update/vehicle/:id", (req, res, next) => {
        let obj = {}
        if (req.body.VIN != undefined) obj.VIN = req.body.VIN
        if (req.body.available_indicator != undefined) obj.available_indicator = req.body.available_indicator
        if (req.body.odomenter != undefined) obj.odomenter = req.body.odomenter
        if (req.body.make != undefined) obj.make = req.body.make
        if (req.body.model != undefined) obj.model = req.body.model
        if (req.body.year != undefined) obj.year = req.body.year
        if (req.body.condition_desc != undefined) obj.condition_desc = req.body.condition_desc
        Vehicule.updateOne({ _id: req.params.id },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })
    
    app.put("/api/update/address/:id", (req, res, next) => {
        let obj = {}
        if (req.body.street_address_1 != undefined) obj.street_address_1 = req.body.street_address_1
        if (req.body.street_address_2 != undefined) obj.street_address_2 = req.body.street_address_2
        if (req.body.city != undefined) obj.city = req.body.city
        if (req.body.state != undefined) obj.state = req.body.state
        if (req.body.zip != undefined) obj.zip = req.body.zip
        Address.updateOne({ _id: req.params.id },
            { $set: obj }).then(data => res.status(200).json("Update: Success!"))
            .catch(next)
    })
}