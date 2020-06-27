const express = require("express");
const router = express.Router();
const {
  bookApointment,
  getApointments,
} = require("../../../controllers/DoctorController");

//middleware
const auth = require("../../../middleware/auth");

router.post("/book-apointment", auth, bookApointment);
router.get("/get-apointments", auth, getApointments);

module.exports = router;
