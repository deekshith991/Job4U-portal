const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  uid: {
    type: mongoose.SchemaTypes.ObjectId,
  },
  company: {
    type: String,
  },
  position: {
    type: String,
  },
  salary: {
    type: Number,
  },
    jd:{
    type:String,
  },
  lastDate: {
    type:String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("jobs", JobSchema);
