const connectDb = require("./config/db");
const app = require("./middlewares/app");

require("dotenv").config();

connectDb();
app.listen(process.env.PORT, () => {
  console.log("Server is running on", process.env.PORT, " port.");
});
