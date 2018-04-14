// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var branchAddressSchema = new Schema({
    branchId: {
        type: Schema.Types.ObjectId,
        ref: "Branch"
    },
    addressId: {
        type: Schema.Types.ObjectId,
        ref: "Address"
    }
});

var BranchAddress = mongoose.model("BranchAddress", branchAddressSchema);

module.exports = BranchAddress;