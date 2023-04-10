const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require('cors')

// Import the usersRouter and userControllers
const usersRouter = require("./routes/userRouter.js");
const { registerUser, loginUser } = require("./controllers/userController.js");

// Parse incoming JSON data
app.use(express.json());
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "happyteens",
});

// Define a route to handle registration
app.post("/register", registerUser);

// Define a route to handle login
app.post("/login", loginUser);

// Mount the usersRouter
app.use("/", usersRouter);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`=== Server started on port ${port} ===`));
