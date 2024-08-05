const mongoose = require("mongoose");

const CompanyProfileSchema = mongoose.Schema({
    name: {
        type: String,
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