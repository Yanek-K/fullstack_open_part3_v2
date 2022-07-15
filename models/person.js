const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URI;

console.log("Connecting to Database");
mongoose
  .connect(url)
  .then((result) => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    minLenth: 9,
    required: true,
  },
  id: String,
});

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Person", personSchema);
