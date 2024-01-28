const jwt = require("jsonwebtoken");
console.log("JWT Secret:", process.env.JWT_SECRET);
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = generateToken;
