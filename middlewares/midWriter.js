function midWriter(req, res, next) {
  if (req.user.role.code >= 200) {
    return next();
  } else {
    return res.send("acceso denegado");
  }
}

module.exports = midWriter;
