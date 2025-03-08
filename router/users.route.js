const express = require("express");
const userController = require("../controller/user.controller");

let router = express.Router();

router.post("/", userController.add);
