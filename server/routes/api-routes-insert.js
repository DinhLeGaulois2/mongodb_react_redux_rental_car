var Address = require('../models/address.js');
var Branch = require('../models/branch.js');
var BranchAddress = require('../models/branchAddress.js');
var Customer = require('../models/customer.js');
var CustomerAddress = require('../models/customerAddress.js');
var Rental = require('../models/rental.js');
var Vehicle = require('../models/vehicle.js');

var cus_data = require('../data/customers')

module.exports = function (app) {
    app.post("/api/add/vehicle", (req, res, next) => {
        Vehicle.insertOne(req.body, (err, db) => {
            if (err) throw next(err)
            res.status(200).json({ msg: "Insertion: Success!" })
        })
    })

    app.post("/api/add/rental", (req, res, next) => {
        Rental.insertOne(req.body, (err, db) => {
            if (err) throw next(err)
            res.status(200).json({ msg: "Insertion: Success!" })
        })
    })

    //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
    app.post("/api/add/customers", (req, res, next) => {
        Customer.insertMany(cus_data, (err, db) => {
            if (err) throw next(err)
            res.status(200).json(db)
        })
    })


    app.post("/api/add/branch", (req, res, next) => {
        Branch.find({ branchName: req.body.branch.branchName }, (err, db) => {
            if (err) throw next(err)
            if (db.length == 0) {
                Branch.insertOne(req.body.branch, (err, db) => {
                    if (err) throw next(err)
                    Address.insertOne(req.body.address, (err, data) => {
                        if (err) throw next(err)
                        BranchAddress.insertOne({ addressId: data._id, branchId: db._id }, (err, data) => {
                            res.status(200).json({ msg: "Insertion: Success!" })
                        })
                    })
                })
            }
            else res.status(200).json("Existing Branch, nothing to do!")
        })
    })

    // It would be better with 'transaction' ....
    app.post("/api/add/customer", (req, res, next) => {
        let cus = req.body.customer
        let add = req.body.addresse
        Customer.find(cus, (err, db) => {
            if (err) throw next(err)
            if (db.length == 0) {
                Customer.insertOne(cus, (err, db) => {
                    if (err) throw next(err)
                    Address.find(add, (err, data) => {
                        if (data.length == 0) {
                            Address.insertOne(cus, (err, data) => {
                                CustomerAddress.find({ custumerId: db._id, addressId: data._id }, (err, data) => {
                                    if (err) throw next(err)
                                    if (data.length == 0) {
                                        CustomerAddress.insertOne({ custumerId: db._id, addressId: data._id }, (err, data) => {
                                            if (err) throw next(err)
                                            res.status(200).json("Insertion: Success!")
                                        })
                                    }
                                    else res.status(200).json("Customer Existed, nothing to do!")
                                })
                            })
                        }
                        else {
                            customerAddress.find({ custumerId: db._id, addressId: data._id }, (err, data) => {
                                if (data.length == 0) {
                                    CustomerAddress.insertOne({ custumerId: db._id, addressId: data._id }, (err, data) => {
                                        if (err) throw next(err)
                                        res.status(200).json("Insertion: Success!")
                                    })
                                }
                                else res.status(200).json("Customer Existed, nothing to do!")
                            })
                        }
                    })
                })
            }
            else { // if the customer exist (this could be a homonym, need to check more)
                Address.find(add, (err, data) => {
                    if (data.length == 0) {
                        Address.insertOne(cus, (err, data) => {
                            CustomerAddress.find({ custumerId: db._id, addressId: data._id }, (err, data) => {
                                if (err) throw next(err)
                                if (data.length == 0) {
                                    CustomerAddress.insertOne({ custumerId: db._id, addressId: data._id }, (err, data) => {
                                        if (err) throw next(err)
                                        res.status(200).json("Insertion: Success!")
                                    })
                                }
                                else res.status(200).json("Customer Existed, nothing to do!")
                            })
                        })
                    }
                    else {
                        customerAddress.find({ custumerId: db._id, addressId: data._id }, (err, data) => {
                            if (data.length == 0) {
                                CustomerAddress.insertOne({ custumerId: db._id, addressId: data._id }, (err, data) => {
                                    if (err) throw next(err)
                                    res.status(200).json("Insertion: Success!")
                                })
                            }
                            else res.status(200).json("Customer Existed, nothing to do!")
                        })
                    }
                })
            }
        })
    })
}