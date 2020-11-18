module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    dealerId: DataTypes.INTEGER,
    orderDate: DataTypes.DATE,
    totalValue: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    commission: DataTypes.DECIMAL,
    commissionPercent: DataTypes.INTEGER
  }, {});
  
  Order.associate = models => {
    Order.hasMany(models.OrderItem, {
      foreignKey: 'orderId',
      as: 'items'
    })
  };

  return Order;
};