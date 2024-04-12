const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.setHeader("X-TimeStamp", Date.now());
  let message = req.query.message;
  const lang = req.headers["x-language"];

  if (req.query.message === "") {
    res.status(400);
    message = "No message provided";
  }

  if (lang === "es") {
    message = "Hola";
  } else if (lang === "fr") {
    message = "Bonjour";
  }

  res.send({ message });
});

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Headers", "X-Token");
  }
  next();
});
router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

module.exports = router;
