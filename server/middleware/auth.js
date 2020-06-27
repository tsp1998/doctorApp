const { JWT_SECRET } = require("../config/keys");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const headers = req.headers["x-access-token"] || req.headers["authorization"];
  if (!headers) {
    return next(new Error("Unautorization error"));
  } else {
    const token = headers.split(" ")[1];
    if (!token) {
      next(new Error("No Token Provided"));
    } else {
      try {
        const decodedUser = jwt.verify(token, JWT_SECRET);
        req.user = decodedUser;
        next();
      } catch (error) {
        next(error);
      }
    }
  }
};
