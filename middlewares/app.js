const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const videosRouter = require("../router/vidoe.route");

app.use(cors());
app.use(morgan("dev"));

app.use("/", express.static("public"));

app.use(express());
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));

app.use("api/v1/video", videosRouter);
app.get("*", (req, res, next) => {
  res.send("hhh");
});

module.exports = app;
