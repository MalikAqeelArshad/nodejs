const { Router } = require("express");
const adminRoutes = Router();

const { users, fnUser } = require("../helpers");

adminRoutes
   .get("/", (req, res) => {
      console.log(req.originalUrl); // /admin
      res.send("Admin Homepage");
   })
   .get("/users", (req, res) => {
      console.log(req.originalUrl); // /admin/users
      res.json(users);
   })
   .route("/users/:id")
   .get((req, res) => {
      // admin users dynamic urls: /admin/users/:id
      res.json(fnUser(req.params.id));
   });

module.exports = adminRoutes;
