const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.setHeader("X-TimeStamp", Date.now());
  let message = req.query.message;

  if (req.query.message === "") {
    res.status(400);
    message = "No message provided";
  }
  res.send({ message });
});

router.use(express.json());
router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

module.exports = router;
