// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var branch_addrSchema = new Schema({
    branchId: {
        type: Schema.Types.ObjectId,
        ref: "Branch"
    },
    addrId: {
        type: Schema.Types.ObjectId,
        ref: "Address"
    }
});

var Branch_addr = mongoose.model("Branch_addr", branch_addrSchema);

module.exports = Branch_addr;