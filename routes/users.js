const { Router } = require("express");
const usersRoutes = Router();

const { users, fnUser } = require("../helpers");

usersRoutes
   .route("/api/users")
   .get((req, res) => {
      res.json(users);
   })
   .post((req, res) => {
      res.json(req.body);
   });

// Dynamic Api's
usersRoutes
   .route("/api/users/:id")
   .get((req, res) => {
      res.json(fnUser(req.params.id));
   })
   .post((req, res) => {
      res.send(`Create Api: /users/:id`);
   })
   .put((req, res) => {
      res.send(`Update Api: /users/:id`);
   })
   .delete((req, res) => {
      res.send(`Delete Api: /users/:id`);
   });

module.exports = usersRoutes;
