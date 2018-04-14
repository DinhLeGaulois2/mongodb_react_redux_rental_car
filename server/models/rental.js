// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var rentalSchema = new Schema({
    pickup_data: { type: Date },
    dropoff_data: { type: Date },
    branchId: {
        type: Schema.Types.ObjectId,
        ref: "Branch"
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    },
    vehiculeId: {
        type: Schema.Types.ObjectId,
        ref: "Vehicule"
    }
});

var Rental = mongoose.model("Rental", rentalSchema);

module.exports = Rental;