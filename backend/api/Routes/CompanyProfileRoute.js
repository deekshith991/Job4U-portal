const express = require('express');
const router = express.Router();

const CompanyProfile = require('../../Models/CompanyProfileDataModel');

router.get("/companies", async (req, res) => {

    res.send("companies");
});

module.exports = router;