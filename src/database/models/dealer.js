module.exports = (sequelize, DataTypes) => {
  const Dealer = sequelize.define('Dealer', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Dealer.associate = models => {
    Dealer.hasMany(models.Order, {
      foreignKey: 'dealerId',
      as: 'orders'
    })
  }
  return Dealer;
};
