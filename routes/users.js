//jshint esversion:6
const express=require("express");
const router=express.Router();

router.get("/",(req,res) => {
  res.render("about");
});

module.exports=router;
