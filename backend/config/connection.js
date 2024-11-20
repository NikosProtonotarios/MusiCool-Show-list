const mongoose = require("mongoose");

main()
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://Nikos:Nikos1234@cluster0.ck9pj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

module.exports = main;
