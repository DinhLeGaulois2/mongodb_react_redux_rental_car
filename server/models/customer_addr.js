// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var customer_addrSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    },
    addressId: {
        type: Schema.Types.ObjectId,
        ref: "Address"
    }
});

var Customer_addr = mongoose.model("Customer_addr", customer_addrSchema);

module.exports = Customer_addr;