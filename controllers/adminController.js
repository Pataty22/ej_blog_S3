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

async function usersList(req, res) {
  const usersAll = await User.findAll();

  return res.render("usersList", { usersAll });
}

/*async function usersEdit(req, res) {
  const userE = await User.findByPk(req.params.id);
  
  return res.render("usersList", { userE });
}*/

async function editU(req, res) {
  const userE = await User.findByPk(req.params.id);

  return res.render("adminEdit", { userE });
}

async function userDelete(req, res) {
  const id = req.params.id;
  await User.destroy({
    where: {
      id: id,
    },
  });
  return res.redirect("/userList");
}

async function updateUser(req, res) {
  const newUser = await User.findByPk(req.params.id);

  await newUser.update({
    fullName: req.body.fullnameEdit,
    email: req.body.emailEdit,
    password: req.body.passwordEdit,
    role: req.body.roleEdit,
  });

  res.redirect("/usersList");
}

module.exports = {
  admin,
  editU,
  usersList,
  userDelete,
  updateUser,
};
