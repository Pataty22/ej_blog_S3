const { Article, User } = require("../models");

async function admin(req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  const listaDeArticulos = await Article.findAll({
    where: { userId: req.user.id },
  });
  for (i = 0; i < listaDeArticulos.length; i++) {
    const name = await User.findByPk(listaDeArticulos[i].userId);
    listaDeArticulos[i].userId = name;
  }

  res.render("admin", {
    listaDeArticulos,
  });
}

async function usersList(req, res) {
  const usersAll = await User.findAll({
    where: { id: req.user.id },
  });

  return res.render("usersList", { usersAll });
}

module.exports = {
  admin,
  usersList,
};
