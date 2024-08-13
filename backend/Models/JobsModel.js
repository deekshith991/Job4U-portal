const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  jid: {
    type: String,
    required: true,
    unique: true, // Ensure that jid is unique
    default: function () {
      return new mongoose.Types.ObjectId(); // Optionally generate a default ObjectId if needed
    }
  },
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
  lastDate: {
    type: Date,
  },
  jd: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("jobs", JobSchema);
