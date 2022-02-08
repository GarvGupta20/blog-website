//jshint esversion:6
const express=require("express");
const router=express.Router();
const contents=require("./components.js");
const _=require("lodash");



router.get("/",(req,res) => {
  res.render("posts");
});

router.get("/:name",(req,res) => { //this is the first concept in dynamic url here the browser go and sees the url the express takes the url and knows okay this url should be dynamic and then stuff happens


  contents.content.forEach((item) => {
    if(_.lowerCase(item.title)==_.lowerCase(req.params.name)) {
      res.render("posts",{title:item.title,content:item.blog});
    }
  });
});



module.exports=router;
