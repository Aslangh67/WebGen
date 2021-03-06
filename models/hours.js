module.exports = function(sequelize, DataTypes) {
    var Hours = sequelize.define("Hours", {
      start_day: DataTypes.STRING,
      end_day: DataTypes.STRING,
      open:DataTypes.STRING,
      close:DataTypes.STRING,
    });

    Hours.associate = function(models) {
      Hours.belongsTo(models.Account, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Hours;
  };
  