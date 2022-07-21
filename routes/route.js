const express = require("express");

const router = express.Router();

router.get("/time", (req, res) => {
    // generate epoch timestamp
  res.json({ epoch: Math.floor(new Date().getTime() / 1000) });
});

module.exports = router;
