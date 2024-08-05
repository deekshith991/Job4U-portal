const mongoose = require('mongoose');
// for Jobseeker only User Only

const UserProfileDataSchema = mongoose.Schema({
    uid: {
        type: mongoose.SchemaTypes.ObjectId
    },
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

module.exports = mongoose.model("Userprofiles", UserProfileDataSchema);