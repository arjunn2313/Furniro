const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// routes
const ProductRoute = require("./routes/product.route");
const UserRoute = require("./routes/user.route");

// Middleware for parsing JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

// paths

app.use("/api/products", ProductRoute);
app.use("/api/user", UserRoute);

app.listen(PORT, () => {
  console.log(`Backend started on port ${PORT}`);
  connectDB();
});
