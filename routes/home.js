//jshint esversion:6
const express=require("express");
const router=express.Router();
const contents=require("./components.js");

router.get("/",(req,res) => {
  res.render("home",{
    bloginfo:contents.content
  });
});


module.exports=router;
