const mongoose = require('mongoose');

const ProfileDataSchema = mongoose.Schema({
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

module.exports = mongoose.Model("UserData", ProfileDataSchema);