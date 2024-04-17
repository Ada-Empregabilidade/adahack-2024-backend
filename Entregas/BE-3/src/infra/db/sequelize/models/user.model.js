const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password_salt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nationality: DataTypes.STRING,
    over_60: DataTypes.BOOLEAN,
    education_level: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    ethnicity: DataTypes.BOOLEAN,
    sexual_orientation: DataTypes.BOOLEAN,
    pcd: DataTypes.BOOLEAN,
    user_type: DataTypes.STRING
  });

  return User;
};

export default UserModel;
