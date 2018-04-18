// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var addressSchema = new Schema({
    streetAddr: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: Number }
});

var Address = mongoose.model("Address", addressSchema);

module.exports = Address;