const { User } = require("../models");

async function usersList(req, res) {
  const usersAll = await User.findAll();

  return res.render("usersList", { usersAll });
}

/*async function usersEdit(req, res) {
  const userE = await User.findByPk(req.params.id);

  return res.render("usersList", { userE });
}*/

async function userDelete(req, res) {
  const id = req.params.id;
  await User.destroy({
    where: {
      id: id,
    },
  });
  return res.redirect("/userList");
}

module.exports = {
  usersList,
  userDelete,
};
