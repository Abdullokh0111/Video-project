// db password Otra1ShnNmRONOgz
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("").then(() => {
      console.log("Db connected");
    });
  } catch (error) {
    console.log("Xatolik yuz berdi", error);
  }
};
