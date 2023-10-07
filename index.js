const express = require("express");
const port = 3000;
const app = express();
//middleware
const logger = (req, res, next) => {
  console.log(req.get("host"));
  next();
};
app.use(logger);
app.get("/", (req, res) => {
  res.send("Hey whats up");
});
app.listen(port);
