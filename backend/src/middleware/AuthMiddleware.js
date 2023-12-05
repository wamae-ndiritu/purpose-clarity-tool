const jwt = require("jsonwebtoken");
const secrete_key = process.env.JWT_SECRET;
const PCTUser = require("../models/PCTUser");
const MPSUser = require("../models/MPSUser");

exports.verifyPCTUser = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, secrete_key);
      req.user = await PCTUser.findById(decoded.id);
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed!" });
    }
  }
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token!" });
  }
};

exports.verifyMPSUser = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, secrete_key);
      req.user = await MPSUser.findById(decoded.id);
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed!" });
    }
  }
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token!" });
  }
};

exports.admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ message: "Not authorized as an Admin!" });
  }
};

exports.verifyToken = (req, res) => {
  const token = req.body.token;
  try {
    const decoded = jwt.verify(token, secrete_key);
    res.status(200).json({ verified: true });
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token failed!" });
  }
};
