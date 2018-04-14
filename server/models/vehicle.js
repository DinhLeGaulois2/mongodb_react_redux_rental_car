// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var vehicleSchema = new Schema({
    VIN: { type: String },
    available_indicator: { type: Boolean },
    odomenter: { type: Number },
    make: { type: String },
    model: { type: String },
    year: { type: Number },
    condition_desc: { type: String }
});

var Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;