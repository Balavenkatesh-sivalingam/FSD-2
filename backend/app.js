const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors"); //to avoid cross origin problems...

//load the env variables
dotenv.config()


//express app
const app = express();

//connect to the database
connectDB();
app.use(express.json());
app.use(cors()); //to fix the cors problems

//defind the routes 
app.use("/api/students", require("./routes/studentRoutes"));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("server is running"))