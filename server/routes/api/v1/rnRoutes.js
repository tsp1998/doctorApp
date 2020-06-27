const express = require("express");
const router = express.Router();
const commentsData = require("../../../data/comments");
const dishesData = require("../../../data/dishes");
const promotionsData = require("../../../data/promotions");
const leadersData = require("../../../data/leaders");

const Feedback = require("../../../models/Feedback");

router.get("/comments", (req, res, next) => {
  return res.json(commentsData);
});
router.get("/dishes", (req, res, next) => {
  return res.json(dishesData);
});
router.get("/promotions", (req, res, next) => {
  return res.json(promotionsData);
});
router.get("/leaders", (req, res, next) => {
  return res.json(leadersData);
});

router.get("/feedback", (req, res, next) => {
  console.log(req.body);
  res.json({ body: req.body });
});
router.post("/feedback", async (req, res, next) => {
  let feedback = req.body;
  try {
    const count = await Feedback.countDocuments();
    if(!isNaN(count)){
      feedback.id = count + 1;
      const newFeedback = new Feedback(feedback)
      const resFeedback = await newFeedback.save()
      if(resFeedback){
        res.json(feedback);
      }else{
        console.log("not saved")
      }
    }else{
      console.log("count not found")
    }
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
