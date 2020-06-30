const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const itemsRouter = require("./controllers/items");

const config = require("./utils/config");
const { unknownEndpoint, errorHandler } = require("./utils/middleware");

const app = express();

//Express json parser
app.use(express.json());

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });
// CORS to allow Cross Origin Resource Sharing
app.use(cors());
// Body parser to parse the post objects
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("HELLO Fucking WORLD");
});

app.use("/api/items/", itemsRouter);

// Middlewares
app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
