const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

exports.postCreateUser = async (req, res, next) => {
  let { name, email, password } = req.body;
  email = email.toString().trim().toLowerCase();
  try {
    const userExist = await User.findOne({ email });
    if (userExist) return next(new Error("Email Already Exist"));
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    const user = await newUser.save();
    if (user) {
      const { name, email } = user;
      return res.json({ message: "User Created", user: { name, email } });
    } else {
      return next(new Error("Database Error: User Not Created"));
    }
  } catch (error) {
    next(error);
  }
};

exports.postLogin = async (req, res, next) => {
  let { email, password } = req.body;
  email = email.toString().trim().toLowerCase();
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      const match = await bcrypt.compare(password, userExist.password);
      if (match) {
        const token = await jwt.sign(
          {
            uid: userExist._id,
            name: userExist.name,
          },
          JWT_SECRET,
          { expiresIn: "1h" }
        );
        return res.json({
          token,
          user: {
            uid: userExist._id,
            name: userExist.name,
          },
        });
      } else {
        next(new Error("Wrong Credentials."));
      }
    } else return next(new Error("Wrong Credentials."));
  } catch (error) {
    next(error);
  }
};

exports.getSampleUsers = async (req, res, next) => {
  const fs = require("fs");
  const path = require("path");
  fs.readFile(path.join(__dirname, "..", "data", "users.json"), (err, data) => {
    if (err) return next(err);
    if (data) {
      return res.json(JSON.parse(data));
    } else {
      return next(new Error("Data not Found"));
    }
  });
};
