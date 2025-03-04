const express = require("express");
let app = express();
const cors = require("cors");
const morgan = require("morgan");
let video = require("../models/video.model");

const videosRouter = require("../router/vidoe.route");

app.use("cors");
