const { Model, DataTypes } = require("sequelize");

class Rol extends Model {
  static initModel(sequelize) {
    Rol.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allownull: false,
        },
        code: {
          type: DataTypes.BIGINT.UNSIGNED,
          allownull: false,
        },
        name: {
          type: DataTypes.STRING(100),
          allownull: false,
        },
      },
      {
        sequelize,
        modelName: "rols",
      }
    );
    return Rol;
  }
}

module.exports = Rol;
