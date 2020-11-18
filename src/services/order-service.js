const database = require('../database/models')
const { Op } = require("sequelize");
function sumItem (total, item){
    return total + item.totalValue;
}
const create = async (order) => {
    
    const isPremiumDealer = await database.PremiumDealer.findOne({where: { cpf: order.dealer.cpf}}) != null
    const status = isPremiumDealer == "" ? "Aprovado" : "Em análise";
    const orderTotalValue = order.items.reduce(sumItem, 0);

    // where valor >= valorInicial e valor <= valor final ou valor final is null
    const cashbackValue = await database.Cashback.findOne(
        { 
            where: 
            { 
                [Op.and]: 
                {
                    initialValue:{ [Op.lte]: orderTotalValue },
                    finalValue: { [Op.or]: [ { [Op.eq]: null } , { [Op.gte]: orderTotalValue } ] }
                }
            }
    });
    
    const created = await database.Order.create({
        dealerId: order.dealer.id,
        orderDate: new Date().getDate(),
        status: status,
        totalValue: orderTotalValue,
        items: order.items,
        commission: orderTotalValue * cashbackValue.percent / 100,
        commissionPercent: cashbackValue.percent
    });
    return created;
}

const listAll = async(dealer) => {
    const result = database.Order.findAll({ 
        attributes: [ 
            ['id', 'codigo'],
            ['totalValue', 'valor'],
            ['orderDate', 'data'],
            ['commissionPercent', 'percent_aplicado'],
            ['commission', 'valor_comissao'],
            'status' 
        ], 
        where: {
        dealerId: dealer
    }})

    return result
}
module.exports = {
    create,
    listAll
}