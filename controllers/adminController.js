const { Article, User } = require("../models");

async function admin(req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  const listaDeArticulos = await Article.findAll();
  for (i = 0; i < listaDeArticulos.length; i++) {
    const name = await User.findByPk(listaDeArticulos[i].userId);
    listaDeArticulos[i].userId = name;
  }

  res.render("admin", {
    listaDeArticulos,
  });
}

async function editU(req, res) {
  const userE = await User.findByPk(req.params.id);

  return res.render("adminEdit", { userE });
}

module.exports = {
  admin,
  editU,
};
