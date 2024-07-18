const express = require("express");
const router = express.Router();
const fs = require("fs");

router.use((req, res, next) => {
   const log = `${new Date().toLocaleString()}: ${req.path}\n`;
   fs.appendFileSync("./log.txt", log);
   next();
});

module.exports = router;
