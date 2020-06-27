const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/jwt");
exports.generateAuthToken = (uid) => {
  const token = jwt.sign({ uid }, jwtSecret);
  return token;
};
