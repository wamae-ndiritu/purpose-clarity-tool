const jwt = require("jsonwebtoken");

const secret_key = process.env.JWT_SECRET;

function generateToken(id) {
  return jwt.sign({ id }, secret_key, {
    expiresIn: 600,
  });
}

module.exports = { generateToken };
