//jshint esversion:6
const express=require("express");
const router=express.Router();
const a=[]; //const doesnt work in array only works when we try to chang the whole array

router.get("/",(req,res) => {
  res.render("components");
});

router.post("/",(req,res) => {
  let content= {
    title:req.body.titleblog,
    blog:req.body.blog
  };
  a.push(content);
  res.redirect("/");   //we directly are redirected to the home route because this is res ethod and res method directly sends request to a route mentioned
});


module.exports.router=router;
module.exports.content=a;
