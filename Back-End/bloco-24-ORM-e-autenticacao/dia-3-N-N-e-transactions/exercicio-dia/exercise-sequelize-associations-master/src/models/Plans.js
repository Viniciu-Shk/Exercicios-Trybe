module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    plan_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
    },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  },
  {
    timestamps: false,
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, {
      foreignKey: 'plan_id',
      as: 'patients'
    });
  }

  return Plan;
};