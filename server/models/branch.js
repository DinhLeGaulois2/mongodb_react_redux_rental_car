// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var branchSchema = new Schema({
    name: { type: String }
});

var Branch = mongoose.model("Branch", branchSchema);

module.exports = Branch;