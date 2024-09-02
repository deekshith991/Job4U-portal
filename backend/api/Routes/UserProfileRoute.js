const express = require('express');
const router = express.Router();
const UserProfileDataModel = require('../../Models/UserProfileDataModel');

const UserData = require('../../Models/UserProfileDataModel');

router.get('/profile/:id', async (req, res) => {
    try{
        const uid = req.params.id;
        const UserProfiles = await UserProfileDataModel.findOne({uid:uid});
        res.json(UserProfiles).status(200);
    } catch( error){
        console.log(error,"\n");
        res.json({success:false,msg:"Error at server"}).status(400);
    }
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
        return res.json({ success: true, message: "Profile saved", pid: data._id }).status(200);

    } catch (error) {
        console.log(error);
        console.log("profile Post error");
        return res.json({ success: false, message: "error registering" }).status(500);
    }
});

module.exports = router;
