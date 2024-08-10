const express = require('express');
const router = express.Router();

const CompanyProfile = require('../../Models/CompanyProfileDataModel');
const Jobs = require('../../Models/JobsModel');

router.get("/companies", async (req, res) => {

    res.send("companies");
});

router.post("/profile", async (req, res) => {

    try {
        const {
            uid,
            name,
            email,
            secondaryMail,
            field,
            type,
        } = req.body;

        const data = new CompanyProfile({
            uid,
            name,
            email,
            secondaryMail,
            field,
            type,
        });

        await data.save();
        console.log("company profile saved", data._id);
        return res.json({ success: true, message: "Profile saved", pid: data._id }).status(200);

    } catch (error) {
        console.log(error);
        console.log("Error at company profile post route");
        return res.json({ success: false, message: "error saving profile" }).status(500);

    }
});

router.post("/post", async (req, res) => {

    try {
        const {
            uid,
            position,
            salary,
            lastDate,
            jd
        } = req.body;

        const data = new Jobs({
            uid,
            position,
            salary,
            lastDate,
            jd
        });

        await data.save();
        console.log("company profile saved", data._id);
        return res.json({ success: true, message: "Job Data saved", jid: data._id }).status(200);

    } catch (error) {
        console.log(error);
        console.log("Error at Job post route");
        return res.json({ success: false, message: "error job post" }).status(500);
    }

})

module.exports = router;