const mongoose = require("mongoose");

const CompanyProfileSchema = mongoose.Schema({
    uid: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
    },
    secondaryMail: {
        type: String,

    },
    field: {
        type: String,
    },
    type: {
        type: String,
    },
});

module.exports = mongoose.model("companyprofiles", CompanyProfileSchema);