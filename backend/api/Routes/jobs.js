
const express = require('express');
const router = express.Router();
const jobs = require('../../Models/JobsModel');


router.get("/jobs", async (req, res) => {
    try {

        const jobsJSON = await jobs.find();
        console.log(jobsJSON);
        res.json(jobsJSON).status(200);

    } catch (error) {
        console.log(error);
        console.log(" error getting jobs");
        return res.json({ success: false, message: "error retriving data" }).status(500);
    }
});

module.exports = router;
