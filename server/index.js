const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Import Routes
const userRoutes = require("./routes/userRoute");
const flightRoutes = require("./routes/flightRoute");

// config app
const app = express();
require("dotenv").config();

//Middlewares
app.use(cors());
app.use(express.json());

// Routes Middleware
app.use("/api/users", userRoutes);
app.use("/api/flights", flightRoutes);

// Run app
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("App is running on port: ", port));

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri)
  .then(console.log("Database is connected ..."))
  .catch((err) => console.log("Database could not connect ...", err));
