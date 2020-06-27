const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema(
  {
    id:{type: Schema.Types.Number},
    firstname: { type: Schema.Types.String },
    lastname: { type: Schema.Types.String },
    telnum: { type: Schema.Types.String },
    email: { type: Schema.Types.String },
    agree: { type: Schema.Types.Boolean },
    contactType: { type: Schema.Types.String },
    message: { type: Schema.Types.String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Feedback", FeedbackSchema)
