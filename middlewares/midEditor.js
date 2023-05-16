function midEditor(req, res, next) {
  if (req.user.role.code >= 300) {
    return next();
  } else {
    return res.send("acceso denegado");
  }
}

module.exports = midEditor;
