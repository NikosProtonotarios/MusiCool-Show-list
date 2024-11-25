const mongoose = require("mongoose");
require("dotenv").config();

main()
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

module.exports = main;
