const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  uid: {
    type: mongoose.SchemaTypes.ObjectId,
  },
  position: {
    type: String,
  },
  salary: {
    type: Number,
  },
  lastDate: {
    type: Date,
  },
  jd: {
    type: String,
  },
});

module.exports = mongoose.model("jobs", JobSchema);
