const mongoose = require('mongoose');
// for Jobseeker only User Only

const UserProfileDataSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    personelMail: {
        type: String
    },
    qualification: {
        type: String
    },
    specialization: {
        type: String
    },
    percentage: {
        type: Number
    }
});

module.exports = mongoose.Model("UserData", UserProfileDataSchema);