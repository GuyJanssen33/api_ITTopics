const mongoose = require("mongoose");
const Campus = require("./campus");

const DocentSchema = new mongoose.Schema({
    voornaam: { type: String },
    achternaam: { type: String },
    campus: [{ type: mongoose.Schema.Types.ObjectId, ref: Campus }],
}, { collection: "docent" });

module.exports = mongoose.model("Docent", DocentSchema);