const passport = require("passport");

function viewLogin(req, res) {
  res.render("login", { message: req.flash("error") });
}

function login(req, res) {
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res);
}

module.exports = {
  viewLogin,
  login,
};
