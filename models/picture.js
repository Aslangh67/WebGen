module.exports = function(sequelize, DataTypes) {
    var Picture = sequelize.define("Picture", {
      picture_name: DataTypes.STRING,
      picture_url: DataTypes.STRING
    });
    return Picture;
  };
  