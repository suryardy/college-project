const router = require("express").Router();
const mongoose = require("mongoose");

const lostSchema = new mongoose.Schema({
  title:String,
  description:String
});

const Lost = mongoose.model("Lost", lostSchema);

router.post("/lost", async (req,res)=>{
  const item = new Lost(req.body);
  await item.save();
  res.json({message:"Saved"});
});

module.exports = router;
