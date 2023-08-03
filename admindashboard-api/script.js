const express = require("express");
const app = express();
const dotenv = require("dotenv");
const api = require("./api");
dotenv.config();
PORT = process.env.API_PORT;

app.use(express.json());

const cors = require("cors");
app.use(cors());

const connectDB = require("./dbconnect");

connectDB();

app.listen(PORT, (err) => {
  if (err) {
    console.log("Server can't start, Facing some Internal Issue");
    clg(err);
  }
  console.log("server started @" + PORT);
});

app.use("/", api);
