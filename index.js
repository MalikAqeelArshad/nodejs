const express = require("express");
const app = express();
const port = 8000;
app.listen(port, () =>
   console.log(`Server running at: http://127.0.0.1:${port}`)
);

app.use(require("./routes/logs"));

app.get("/", (req, res) => {
   res.send("Welcome to Express NodeJS");
});

app.get("/about", (req, res) => {
   res.send("Welcome to About Us Page");
});

// Restful Api's
const usersRoutes = require("./routes/users");
app.use(usersRoutes);

// Admin urls/paths and Restful Api's
const adminRoutes = require("./routes/admin");
app.use("/admin", adminRoutes); // mount the sub app

// Middleware with query parameters
const auth = (req, res, next) => {
   req.query.pass == 123 ? next() : res.sendStatus(401);
};
app.get("/auth", auth, (req, res) => {
   res.send("Login successfully with middleware");
});
