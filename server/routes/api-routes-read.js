var Address = require('../data/address.js');
var Branch = require('../data/branch.js');
var BranchAddress = require('../data/branchAddress.js');
var Customer = require('../data/customer.js');
var CustomerAddress = require('../data/customerAddress.js');
var Rental = require('../data/rental.js');
var Vehicle = require('../data/vehicle.js');

module.exports = function (app) {
    app.get("/api/get/vehicle/:id", (req, res, next) => {
        Vehicle.find({ _id: req.params.id }).then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/branch/:id", (req, res, next) => {
        let result = {}
        Branch.find({ _id: req.params.id }).then(data => {
            if (data.length > 0) {
                result.branch = data
                BranchAddress.find({ branchId: data._id }).then(data => {
                    if (data.length == 0)
                        res.status(400).json({ msg: "BranchAddress Not Found" })
                    else {
                        Address.find({ _id: data.addressId }).then(data => {
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
        Customer.find({ _id: req.params.id }).then(data => {
            if (data.length > 0) {
                result.customer = data
                customerAddress.find({ customerId: data._id }).then(data => {
                    if (data.length == 0)
                        res.status(400).json({ msg: "BranchAddress Not Found" })
                    else {
                        Address.find({ _id: data.addressId }).then(data => {
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
        Rental.find({ _id: req.params.id }).then(data => {
            if (data.length > 0) {
                result.rental = data
                Vehicle.find({ _id: data.vehiculeId }).then(data => {
                    if (data.length == 0)
                        res.status(400).json({ msg: "BranchAddress Not Found" })
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