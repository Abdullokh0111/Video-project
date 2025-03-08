const User = require("../models/users.model");

let addUser = async (req, res, next) => {
  try {
    let user = await User.create(req.body);
    await user.save();
    res.status(201).json({ message: "Foydalonuvchi kiritildi!" });
  } catch (error) {
    next(error);
  }
};

module.exports = addUser;
