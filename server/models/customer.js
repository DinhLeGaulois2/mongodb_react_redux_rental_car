// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    last_name: { type: String },
    first_name: { type: String },
    middle_name: { type: String }
});

var Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;