// It is a root file for express server.

const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoutes");
const app = express();

//Middleware

// const logger = (req, res, next) => {
//     console.log(
//         "Logger is running"
//     );
//     next();
// };

// This is express middleware use to access request body, if we dont use it and
// try to print req body we'll get undefined datatype
//This is used for json type
app.use(express.json());

// This is used for url form type
// app.use(express.urlencoded({extended: false}));

// This middleware will use all routes in ServerApiVersion.js defined in taskRoutes
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Homepage");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
