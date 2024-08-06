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
        success: true,
        message: "Login",
        uid: existing_user._id,
        email: existing_user.email,
        account: existing_user.account
      });
    } else {
      return res
        .status(500)
        .json({ success: false, message: "User Credential's Invalid" });
    }
  } catch (error) {
    console.log("Error");
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error at server" });
  }
});

router.post("/Register", async (req, res) => {
  try {
    const { account, email, password } = req.body;

    const existing_user = await Users.findOne({ email: email });

    if (existing_user) {
      return res
        .status(500)
        .json({ success: false, message: "User already Exist's" });
    }

    const User = new Users({ account, email, password });

    await User.save();
    console.log(User._id);
    return res.status(200).json({
      success: true,
      message: "User Created",
      Uid: User._id,
      email: User.email,
      account: User.account
    });
  } catch (error) {
    console.log("Error :");
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error at server" });
  }
});

module.exports = router;
