const Apointement = require("../models/Apointment");

exports.getApointments = async (req, res, next) => {
  const uid = req.user.uid;
  try {
    const apointments = await Apointement.find({ uid });
    if (apointments) {
      return res.json({ apointments });
    } else {
      return next(new Error("Database Error: Apointement Not Found"));
    }
  } catch (error) {
    next(error);
  }
};

exports.bookApointment = async (req, res, next) => {
  const { doctorId } = req.body;
  const uid = req.user.uid;
  try {
    const newApointement = new Apointement({ doctorId, uid });
    const apointment = await newApointement.save({});
    if (apointment) {
      return res.json({ message: "Apointement Created", apointment });
    } else {
      return next(new Error("Database Error: Apointement Not Created"));
    }
  } catch (error) {
    next(error);
  }
};
