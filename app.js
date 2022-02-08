//jshint esversion:6
//we will be requiring main mdules
const express=require("express");
const bodyparser=require("body-parser");
const path=require("path");
const fs=require("fs");
const createrror=require("http-errors");

//declaration of the express
const app=express();


//requiring my routes jvascript files
const home=require("./routes/home.js");
const users=require("./routes/users.js");
const contact=require("./routes/contact.js");
const components=require("./routes/components.js");
const posts=require("./routes/posts.js");

//declaring global middleware functions
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());

//now using our routes modules to be delared as te global middleware for that routes
app.use("/",home);
app.use("/users",users);
app.use("/contact",contact);
app.use("/components",components.router);
app.use("/posts",posts);

//seting my view engine
app.set("views",path.join(__dirname,"views"));   //path module just jpin the files by "/"
app.set("view engine","ejs");

//error handling
//to handle errors in the express just send the error as next in requests as it will be procssed by the express
/*app.use((req,res,next) => {
  next(createrror(404,"uh oh theres an error"));   //thisi sthe basic of error handling
});*/

module.exports=app;

//listening to our port
app.listen(3000, (err) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log("your server has been set up");
  }
});
