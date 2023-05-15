require("dotenv").config();
const { passport, passportConfig } = require("./passport");

const flash = require("express-flash");
const express = require("express");
const session = require("express-session");

const makeUserAvailableInViews = require("./middlewares/makeUserAvailableInViews");

const router = require("./routers");

const app = express();
const methodOverride = require("method-override");
app.set("view engine", "ejs");

//Middlewares

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    unset: "destroy",
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(makeUserAvailableInViews);
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(express.json());

router(app);

passportConfig();

app.listen(3000, () => {
  console.log("Running at port 3000.");
});
