const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const UserRouter = require("./Routes/UserRouter");
const MovieRouter = require("./Routes/MovieRoutes");

const app = express();
app.use(express.json());
app.use("/api/users", UserRouter);
app.use("/api/movie", MovieRouter);

mongoose.set("strictQuery", true);

mongoose.connect(process.env.mongo_url, (err) =>
  err ? console.log(err) : console.log("The DB is connected")
);

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server is running on port ${PORT}`)
);
