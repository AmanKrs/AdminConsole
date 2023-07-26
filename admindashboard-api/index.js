var express = require("express")
var app = express();
var dotenv =require("dotenv")
dotenv.config();

PORT= process.env.API_PORT
console.log(PORT)

app.listen(PORT, ()=>{
  console.log("server started @"+ PORT)
})