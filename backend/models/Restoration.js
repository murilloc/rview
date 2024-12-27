// models/Restoration.js
module.exports = (sequelize, DataTypes) => {
  const Restoration = sequelize.define("Restoration", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    timestamp: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
  });
  return Restoration;
};
