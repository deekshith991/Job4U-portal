const express = require('express')
const router = express.Router();

const UserData = require('../../Models/UserProfileDataModel');

router.get('/profile', async (req, res) => {
    res.send("hello");
});

router.post('/profile', async (req, res) => {
    try {

        // data
        const {
            uid,
            firstName,
            lastName,
            email,
            personelMail,
            qualification,
            specialization,
            percentage
        } = req.body

        const data = new UserData({
            uid,
            firstName,
            lastName,
            email,
            personelMail,
            qualification,
            specialization,
            percentage
        });

        await data.save();
        console.log("Profile Data id", data._id);
        return res.json({ status: "success", message: "Profile saved", pid: data._id }).status(200);

    } catch (error) {
        console.log(error);
        console.log("profile Post error");
        return res.json({ status: "failed", message: "error registering" }).status(500);
    }
});

module.exports = router;