async function logoutUser(req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    return res.redirect("/home");
  });
}

module.exports = {
  logoutUser,
};
