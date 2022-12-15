require("dotenv").config();
const mongoose = require("mongoose");

//mongoose.connect('mongodb+srv://ons:<password>@cluster0.zo6etpd.mongodb.net/?retryWrites=true&w=majority',()=>console.log("MongoDB connection SUCCESS") );
const products = require("./data/products");
const users = require("./data/users");

const Product = require("./models/Product");
const User = require("./models/User");
const connectDB = require("./config/db");

connectDB();

const importData = async () => {
  try {
    await User.deleteMany({})
    await User.insertMany(users)

    await Product.deleteMany({});
    await Product.insertMany(products)

    console.log("Data Import Success");
    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();