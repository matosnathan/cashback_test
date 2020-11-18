module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    name: DataTypes.STRING,
    quantity: DataTypes.FLOAT,
    totalValue: DataTypes.DECIMAL,
    orderId: DataTypes.INTEGER
  }, {});
  
  OrderItem.associate = models => {
    OrderItem.belongsTo(models.Order);
  };

  return OrderItem;
};