const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const routers = require("./routes/mainRoutes");
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routers);
app.listen(1235);
