// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    lName: { type: String },
    fName: { type: String },
});

var Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;