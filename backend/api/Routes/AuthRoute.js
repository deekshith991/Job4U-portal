const express = require("express");
const router = express.Router();

const Users = require("../../Models/UserModelSchema.js");

router.post("/Login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existing_user = await Users.findOne({
      email: email,
      password: password,
    });

    if (existing_user) {
      return res.status(200).json({
        status: "success",
        message: "Login",
        uid: existing_user._id,
        email: existing_user.email,
      });
    } else {
      return res
        .status(500)
        .json({ status: "failed", message: "User Credential's Invalid" });
    }
  } catch (error) {
    console.log("Error");
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Error at server" });
  }
});

module.exports = router;
