const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApointmentSchema = new Schema(
  {
    uid: {
      type: Schema.Types.String,
      required: true,
    },
    doctorId: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Apointment", ApointmentSchema);
