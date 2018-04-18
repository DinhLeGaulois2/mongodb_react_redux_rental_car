// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var vehicleSchema = new Schema({
    available: { type: Boolean },
    odomenter: { type: Number },
    make: { type: String },
    model: { type: String },
    condition: { type: String }
});

var Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;