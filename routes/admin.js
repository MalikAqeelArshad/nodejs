const { Router } = require("express");
const adminRoutes = Router();

const { users, fnUser } = require("../helpers");

adminRoutes.get("/", (req, res) => {
   console.log(req.originalUrl); // /admin
   res.send("Admin Homepage");
});
adminRoutes.get("/users", (req, res) => {
   console.log(req.originalUrl); // /admin/users
   res.json(users);
});
// admin users dynamic urls: /admin/users/:id
adminRoutes.route("/users/:id").get((req, res) => {
   res.json(fnUser(req.params.id));
});

module.exports = adminRoutes;
