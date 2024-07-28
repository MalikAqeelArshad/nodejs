const { Router } = require("express");
const logs = Router();
const fs = require("fs");

logs.use((req, res, next) => {
   const log = `${new Date().toLocaleString()}: ${req.path}\n`;
   fs.appendFileSync("./log.txt", log);
   next();
});

module.exports = logs;
