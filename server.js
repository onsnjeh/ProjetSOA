//this is considered as view file 
require("dotenv").config(); 
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes")
const mongoose = require("mongoose");

const app = express();
mongoose.connect('mongodb+srv://ons:<password>@cluster0.zo6etpd.mongodb.net/?retryWrites=true&w=majority',()=>console.log("MongoDB connection SUCCESS") );

app.use(express.json())

app.get("/", (req, res) => { 
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes); 
app.use("/api/users", userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

