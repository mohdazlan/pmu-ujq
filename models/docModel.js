const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  title: { type: String },
  runningNumber: Number,
  dateReceived: Date,
});

const Document = mongoose.model("Document", documentSchema);

module.exports = Document;
