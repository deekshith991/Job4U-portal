const express = require('express');
const router = express.Router();

const CompanyProfile = require('../../Models/CompanyProfileDataModel');

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
        return res.json({ status: "success", message: "Profile saved", pid: data._id }).status(200);

    } catch (error) {
        console.log(error);
        console.log("Error at company profile post route");
        return res.json({ status: "success", message: "error saving profile" }).status(500);

    }
})

module.exports = router;