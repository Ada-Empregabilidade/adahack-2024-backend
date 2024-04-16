module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      gender : {
        type: DataTypes.STRING
    },

    sexual_orientation : {
        type: DataTypes.STRING
    },

    ethnicity : {
        type: DataTypes.STRING
    },

    pwd : {
        type: DataTypes.BOOLEAN
    }

    },
    { tableName: "users", timestamps: false }
  );

  return User;
};
