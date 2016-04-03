export default (sequelize, DataTypes) => {
  const schema = {
    firstName: {
      field: 'first_name',
      type: DataTypes.STRING
    },
    lastName: {
      field: 'last_name',
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  };

  const methods = {
    tableName: 'users',
    timestamps: false
  };

  return sequelize.define('user', schema, methods);
};
