const mongoose = require("mongoose");

const connectDB = async () => {
  MONGO_URL="mongodb+srv://ons:ons123@cluster0.zo6etpd.mongodb.net/?retryWrites=true&w=majority"
  try {
    await mongoose.connect(
      MONGO_URL, 
      { useNewUrlParser: true }
    );
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  } 
};

module.exports = connectDB;