const express = require("express");
const router = express.Router();
const admin = require("../config/firebaseAdmin");
const User = require("../models/User");
const { json } = require("body-parser");

router.post("/email/register",async(req,res)=>{
  try{
    const {token} = req.body;
    const decoded = await admin.auth().verifyIdToken(token);
    const{uid,email,name} = decoded;
    let user = await User.findOne({firebaseId:uid});
    if(!user){
      await User.create({
        firebaseId:uid,
        email,
        name,
        profilePic:"sdlkjfs",
      });
    }
    res.status(200).json({ success: true, user });
  }
  catch(err){
      console.error("Email Register Error with DB: ",err);
      res.status(401).json({ message: "Unauthorized" });
  }
})

router.post("/email/login", async (req, res) => {
  try {
    const { token } = req.body;
    const decoded = await admin.auth().verifyIdToken(token);
    const { uid } = decoded;

    const user = await User.findOne({firebaseId: uid });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json(user);

  } catch (err) {
    console.error("Email Login Error: ", err);
  }
});

router.post("/google", async (req, res) => {
  try {
    const { token } = req.body;
    const decoded = await admin.auth().verifyIdToken(token);

    const { uid, email, name, picture } = decoded;

    let user = await User.findOne({ firebaseId: uid });
    if (!user) {
      user = await User.create({
        firebaseId: uid,
        email,
        name,
        profilePic: picture,
      });
    }
    res.status(200).json({ success: true, user });
  } catch (err) {
    console.error("Google login error:", err);
    res.status(401).json({ message: "Unauthorized" });
  }
});

module.exports = router;
