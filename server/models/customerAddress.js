// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var customerAddressSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    },
    addressId: {
        type: Schema.Types.ObjectId,
        ref: "Address"
    }
});

var CustomerAddress = mongoose.model("CustomerAddress", customerAddressSchema);

module.exports = CustomerAddress;