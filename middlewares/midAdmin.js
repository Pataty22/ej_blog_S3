function midAdmin(req, res, next) {
  if (req.user.role.code >= 400) {
    return next();
  } else {
    return res.send("acceso denegado");
  }
}

module.exports = midAdmin;
