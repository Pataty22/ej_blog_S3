const { Model, DataTypes } = require("sequelize");

class Role extends Model {
  static initModel(sequelize) {
    Role.init(
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
        description: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "roles",
      }
    );
    return Role;
  }
}

module.exports = Role;
