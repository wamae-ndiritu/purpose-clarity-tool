const jwt = require("jsonwebtoken");
const secrete_key = process.env.JWT_SECRET;

exports.verify = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, secrete_key);
      req.user = decoded._id;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed!" });
    }
  }
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token!" });
  }
};
