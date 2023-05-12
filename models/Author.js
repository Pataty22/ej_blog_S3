const { Model, DataTypes } = require("sequelize");

class Author extends Model {
  static initModel(sequelize) {
    Author.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        fullName: {
          type: DataTypes.STRING(100),
          allownull: false,
        },
        email: {
          type: DataTypes.STRING(100),
          allownull: false,
        },
        password: {
          type: DataTypes.STRING(255),
          allownull: false,
        },
        rol: {
          type: DataTypes.BIGINT.UNSIGNED,
          allownull: false,
        },
      },
      {
        sequelize,
        modelName: "author",
        timestamps: false,
      }
    );
    return Author;
  }
}

module.exports = Author;
