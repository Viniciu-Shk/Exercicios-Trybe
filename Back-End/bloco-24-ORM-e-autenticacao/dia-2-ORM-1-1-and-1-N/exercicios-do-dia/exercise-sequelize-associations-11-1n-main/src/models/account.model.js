module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'Accounts',
    underscored: true,
  });

  Account.associate = (models) => {
    Account.hasOne(models.Profile, { foreignKey: 'accountId', as: 'profile' });
    Account.hasMany(models.Comment, { foreignKey: 'accountId', as: 'comments' });
  };

  return Account;
};
