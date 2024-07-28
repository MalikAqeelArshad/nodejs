const { Router } = require("express");
const fs = require("fs");
const logs = Router();

logs.use((req, res, next) => {
   const log = `${new Date().toLocaleString()}: ${req.path}\n`;
   fs.appendFileSync("./log.txt", log);
   next();
});

module.exports = logs;
