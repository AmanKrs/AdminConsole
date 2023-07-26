const express = require("express");
var mongoose =require("mongoose")

const Users =require("../Schema/UserSchema")
const orderList = require("../Schema/OrderListSchema")
const app = express();

const url = "mongodb+srv://AmanKrs:mongoDB20@admindashboarddb.duuxaeb.mongodb.net/UserData"

app.use(express.json())

app.listen(8081, (err) => {
  if (err) console.log(err);

  console.log("Server started successfully at port 8081");
});

mongoose.connect(url).then(()=>{
  console.log("dbconnected")
}).catch((e=>{
  {
    console.log(e)
  }
}))

app.post("/signup", async(req,res)=>{

  console.log(req.body)

  const newUser = {
    Username: req.body.username,
    Password: req.body.password
  }

  console.log(newUser)

  const user = new Users(newUser)

  const addUser = await user.save();

  if(addUser){
    console.log("user added")
  }
  
});

app.post("/orderlist", async(req,res)=>{

  console.log(req.body)

  const newOrder = {
    Customer: req.body.Customer,
    Product: req.body.Product,
    ID: req.body.ID,
    Status: req.body.Status,
    Revenue: req.body.Revenue,
    Date: req.body.Date,
  }

  console.log(newOrder)

  const Order = new orderList(newOrder)

  const AddOrder = await Order.save();

  if(AddOrder){
    console.log("OrderList added")
  }
  
});