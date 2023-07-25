var mongoose = require("mongoose")

var orderSchema = mongoose.Schema({

   Customer: String,
    Product: String,
    ID: Number,
    Status: String,
    Revenue: String,
    Date: Date,
})


const orderList = mongoose.model("OrderList", orderSchema)

module.exports = orderList;