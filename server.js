const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define a user schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Create a User model
const User = mongoose.model("User", userSchema);

// Create an Express application
const app = express();

// Middleware to parse request bodies
app.use(bodyParser.json());

// POST endpoint for login form submission
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  User.findOne({ username, password }, (err, user) => {
    if (err) {
      console.error("Error finding user:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // User found, send success message
    res.json({ message: "Welcome!" });
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
