module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    accountId: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
    tableName: 'Profiles',
    underscored: true,
  });

  Profile.associate = (models) => {
    Profile.belongsTo(models.Account, { foreignKey: 'accountId', as: 'account' });
  };
  return Profile;
};