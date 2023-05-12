const bcrypt = require("bcryptjs");
const { User } = require("../models");

async function viewRegister(req, res) {
  return res.render("register");
}

async function createdAuthor(req, res) {
  const passParaHashear = req.body.password;
  const passHasheada = await bcrypt.hash(passParaHashear, 10);

  const newUser = await User.create({
    id: req.body.id,
    fullName: req.body.fullname,
    email: req.body.email,
    password: passHasheada,
  });

  if (newUser) {
    req.login(newUser, () => res.redirect("/home"));
  } else {
    res.redirect("back");
  }

  //return res.redirect("home");
}

module.exports = {
  viewRegister,
  createdAuthor,
};
