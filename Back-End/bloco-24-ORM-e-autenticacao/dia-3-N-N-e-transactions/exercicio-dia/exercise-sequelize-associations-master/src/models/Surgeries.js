module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    surgery_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
    },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  return Surgery;
};