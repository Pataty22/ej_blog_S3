const { Article, User, Comment } = require("../models");

async function readerIndex(req, res) {
  return res.render("reader");
}

module.exports = {
  readerIndex,
};
