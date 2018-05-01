var objectId = require('mongodb').ObjectId

var Address = require('../models/address.js');
var Branch = require('../models/branch.js');
var Branch_addr = require('../models/branch_addr.js');
var Customer = require('../models/customer.js');
var Customer_addr = require('../models/customer_addr.js');
var Rental = require('../models/rental.js');
var Vehicle = require('../models/vehicle.js');

module.exports = function (app) {
    app.get("/api/get/customers", (req, res, next) => {
        Customer.find().then(data => res.status(200).json(data))
        .catch(next)
    })

    app.get("/api/get/vehicle/:id", (req, res, next) => {
        Vehicle.find({ _id: objectId(req.params.id) }).then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/branch/:id", (req, res, next) => {
        let result = {}
        Branch.find({ _id: objectId(req.params.id) }).then(data => {
            if (data.length > 0) {
                result.branch = data
                Branch_addr.find({ branchId: objectId(data._id) }).then(data => {
                    if (data.length == 0)
                        res.status(400).json({ msg: "Branch_addr Not Found" })
                    else {
                        Address.find({ _id: objectId(data.addressId) }).then(data => {
                            if (data.length > 0) {
                                result.address = data
                                res.status(200).json(result)
                            }
                            else res.status(400).json({ msg: "Address Not Found" })
                        }).catch(next)
                    }
                }).catch(next)
            }
            else res.status(400).json({ msg: "Branch Not Found" })
        }).catch(next)
    })

    app.get("/api/get/customer/:id", (req, res, next) => {
        let result = {}
        Customer.find({ _id: objectId(req.params.id) }).then(data => {
            if (data.length > 0) {
                result.customer = data
                customer_addr.find({ customerId: objectId(data._id) }).then(data => {
                    if (data.length == 0)
                        res.status(400).json({ msg: "Branch_addr Not Found" })
                    else {
                        Address.find({ _id: objectId(data.addressId) }).then(data => {
                            if (data.length > 0) {
                                result.address = data
                                res.status(200).json(result)
                            }
                            else res.status(400).json({ msg: "Address Not Found" })
                        }).catch(next)
                    }
                }).catch(next)
            }
            else res.status(400).json({ msg: "Branch Not Found" })
        }).catch(next)
    })

    app.get("/api/get/rental/:id", (req, res, next) => {
        let result = {}
        Rental.find({ _id: objectId(req.params.id) }).then(data => {
            if (data.length > 0) {
                result.rental = data
                Vehicle.find({ _id: data.vehiculeId }).then(data => {
                    if (data.length == 0)
                        res.status(400).json({ msg: "Branch_addr Not Found" })
                    else {
                        Branch.find({ _id: data.branchId }).then(data => {
                            if (data.length > 0) {
                                result.branch = data
                                Customer.find({ _id: data.customerId }).then(data => {
                                    if (data.length > 0) {
                                        result.customer = data
                                        res.status(200).json(result)
                                    }
                                    else res.status(400).json({ msg: "Customer Not Found" })
                                }).catch(next)
                            }
                            else res.status(400).json({ msg: "Branch Not Found" })
                        }).catch(next)
                    }
                }).catch(next)
            }
            else res.status(400).json({ msg: "Rental Not Found" })
        }).catch(next)
    })
}