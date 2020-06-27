const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
    },
    email: {
      type: Schema.Types.String,
      required: true,
    },
    phone: {
      type: Schema.Types.String,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    isAdmin: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
