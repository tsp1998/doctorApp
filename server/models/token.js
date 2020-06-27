const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const TokenSchema = new Schema({
  token: {
    type: Schema.Types.String,
    required: true,
  },
  timestamp: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Token", TokenSchema);
