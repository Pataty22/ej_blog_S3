const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  }
);

const Article = require("./Article");
const User = require("./User");
const Comment = require("./Comment");
const Rol = require("./Rol");

Article.initModel(sequelize);
User.initModel(sequelize);
Comment.initModel(sequelize);
Rol.initModel(sequelize);

User.hasMany(Article);
Article.belongsTo(User);

Article.hasMany(Comment);
Comment.belongsTo(Article);

Rol.hasMany(User);
User.belongsTo(Rol);

module.exports = {
  sequelize,
  Article,
  User,
  Comment,
  Rol,
};
