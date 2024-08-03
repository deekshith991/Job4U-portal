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
        .json({ status: "failed", message: "User Credential's Invalid" })
        .status(401);
    }
  } catch (error) {
    console.log("Error");
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Error at server" });
  }
});

router.post("/Register", async (req, res) => {
  try {
    const { account, email, password } = req.body;

    const existing_user = await Users.findOne({ email: email });

    if (existing_user) {
      return res
        .json({ status: "failed", message: "User already Exist's" })
        .status(401);
    }

    const User = new Users({ account, email, password });

    await User.save();
    console.log(User._id);
    return res.status(200).json({
      status: "success",
      message: "User Created",
      Uid: User._id,
      email: User.email,
    });

  } catch (error) {
    console.log("Error :");
    console.log(error);
    return res
      .json({ status: "failed", message: "Error at server" })
      .status(401);
  }
});


module.exports = router;
