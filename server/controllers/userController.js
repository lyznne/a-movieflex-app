const mysql = require("mysql");

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "happyteens"
});

// Handle user registration
exports.registerUser = (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;
  const user = { firstname, lastname, username, email, password };
  
  db.query("INSERT INTO users SET ?", user, (err, result) => {
    if (err) throw err;
    res.send("User registered successfully");
  });
};

// Handle user login
exports.loginUser = (req, res) => {
  const { email, username, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ? OR username = ?", [email, username], (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      if (result[0].password === password) {
        res.send("User logged in successfully");
      } else {
        res.send("Invalid password");
      }
    } else {
      res.send("Invalid email or username");
    }
  });
};
